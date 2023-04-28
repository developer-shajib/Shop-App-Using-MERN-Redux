import Brand from '../model/brandModel.js';
import { unlinkSync } from 'fs';
import Utils from '../utils/Utils.js';

/**
 * @desc Get all product Brand
 * @name GET /brand
 * @access public
 */
export const getAllBrand = async (req, res, next) => {
  try {
    const data = await Brand.find();
    if (data) {
      res.status(200).json({
        brand: data,
        message: 'Get all Brand success',
      });
    } else {
      next(Utils.createError('Brand Not Found!', 404));
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Create a brand
 * @name POST /brand
 * @access public
 */
export const createBrand = async (req, res, next) => {
  try {
    const slug = Utils.createSlug(req.body.name);

    const data = await Brand.create({ ...req.body, slug, photo: req.file ? req.file.filename : null });
    if (data) {
      res.status(200).json({
        brand: data,
        message: 'Brand Created Successful',
      });
    } else {
      next(Utils.createError('Brand Not Created', 400));
    }
  } catch (error) {
    next(error);
  }
};

// /**
//  * @desc Get Single Brand
//  * @name GET /brand/id
//  * @access public
//  */
export const getSingleBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const allData = await Brand.find();
    const isValid = await allData.find((item) => item._id == id);

    if (isValid) {
      const data = await Brand.findById(id);

      res.status(200).json({
        brand: data,
        message: 'Single Brand Get Successful',
      });
    } else {
      next(Utils.createError('Brand Not Found', 404));
    }
  } catch (error) {
    next(error);
  }
};

// /**
//  * @desc Update Single Product Brand
//  * @name PUT/PATCH /brand/id
//  * @access public
//  */
export const updateSingleBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    // Check id  validation
    const allData = await Brand.find();
    const isValid = allData.find((item) => item._id == id);

    // Update Brand
    if (isValid) {
      let photo = isValid.photo;
      if (req.file) {
        isValid.photo && unlinkSync(`api/public/image/brand/${isValid.photo}`);
        photo = req.file.filename;
      }
      const slug = Utils.createSlug(req.body.name);
      let status = isValid.status;
      if (req.body.status) {
        status = req.body.status;
      }

      const data = await Brand.findByIdAndUpdate(id, { ...req.body, status, slug, photo }, { new: true });
      res.status(200).json({
        brand: data,
        message: 'Brand Update Successful',
      });
    } else {
      next(Utils.createError('Brand Not Updated! Try Again.', 400));
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Delete Product Brand
 * @name DELETE /brand/id
 * @access public
 */
export const deleteBrand = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Check Validity for id
    const allData = await Brand.find();
    const isValid = allData.find((item) => item._id == id);

    // Delete Brand
    if (isValid) {
      isValid.photo && unlinkSync(`api/public/image/brand/${isValid.photo}`);

      const data = await Brand.findByIdAndDelete(id);

      res.status(200).json({
        brand: data,
        message: 'Brand Delete Successful',
      });
    } else {
      next(Utils.createError('Brand Not Deleted!', 400));
    }
  } catch (error) {
    next(error);
  }
};
