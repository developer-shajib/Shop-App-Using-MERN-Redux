import Product from '../model/productModel.js';
import { unlinkSync } from 'fs';
import Utils from '../utils/Utils.js';

/**
 * @desc Get all Product
 * @name GET /
 * @access public
 */
export const getAllProduct = async (req, res, next) => {
  try {
    const data = await Product.find();
    if (data) {
      res.status(200).json({
        product: data,
        message: 'Get all Product success',
      });
    } else {
      next(Utils.createError('Product Not Found!', 404));
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Create a Product
 * @name POST /
 * @access public
 */
export const crateProduct = async (req, res, next) => {
  try {
    const slug = Utils.createSlug(req.body.name);
    const gallery = req.files?.product_gallery_photo
      ? req.files.product_gallery_photo.map((item) => item.filename)
      : null;

    const data = await Product.create({
      ...req.body,
      slug,
      photo: req.files?.product_photo ? req.files.product_photo[0].filename : null,
      gallery,
    });

    if (data) {
      res.status(200).json({
        product: data,
        message: 'Product Created Successful',
      });
    } else {
      next(Utils.createError('Product Not Created', 400));
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Get Single Product
 * @name GET /id
 * @access public
 */
export const getSingleProduct = async (req, res, next) => {
  try {
    const { slug } = req.params;
    // Check id  validation
    const allData = await Product.find();
    const isValid = allData.find((item) => item.slug == slug);

    if (isValid) {
      res.status(200).json({
        product: isValid,
        message: 'Single Product Get Successful',
      });
    } else {
      next(Utils.createError('Product Not Found', 404));
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Delete Single Product
 * @name Delete /id
 * @access public
 */
export const deleteSingleProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Check id  validation
    const allData = await Product.find();
    const isValid = allData.find((item) => item._id == id);
    if (isValid) {
      const data = await Product.findByIdAndDelete(id);

      // Delete Related file
      unlinkSync(`api/public/image/productImg/${data.photo}`);
      data.gallery.map((item) => {
        unlinkSync(`api/public/image/productGalImg/${item}`);
      });

      // Get Response Data
      res.status(200).json({
        data: data,
        message: 'Product Deleted Successful',
      });
    } else {
      next(Utils.createError('Product Not Found!', 404));
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Update Single Product
 * @name PUT/PATCH /id
 * @access public
 */
export const updateSingleProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    // Check id  validation
    const allData = await Product.find();
    const isValid = allData.find((item) => item._id == id);
    // Update Product
    if (isValid) {
      // create Slug
      const slug = Utils.createSlug(req.body.name);

      // product photo check
      let photo = isValid.photo;

      if (req.files.product_photo) {
        // delete photo from file
        unlinkSync(`api/public/image/productImg/${isValid.photo}`);

        // make loop for get single photo name
        photo = req.files.product_photo[0].filename;
      }

      // Product gallery photo check
      let gallery = isValid.gallery;

      if (req.files.product_gallery_photo) {
        // // Delete image from File
        // isValid.gallery.map((item) => {
        //   unlinkSync(`api/public/image/productGalImg/${item}`);
        // });

        // push image name to database
        gallery = req.files.product_gallery_photo.map((item) => item.filename);
      }

      const data = await Product.findByIdAndUpdate(id, { ...req.body, slug, photo, gallery }, { new: true });

      res.status(200).json({
        product: data,
        message: 'Product Update Successful',
      });
    } else {
      next(Utils.createError('Product Not Updated! Try Again.', 400));
    }
  } catch (error) {
    next(error);
  }
};
