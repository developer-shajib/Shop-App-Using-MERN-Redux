import Category from '../model/categoryModel.js';
import { unlinkSync } from 'fs';
import Utils from '../utils/Utils.js';

/**
 * @desc Get all product Category
 * @name GET /category
 * @access public
 */
export const getAllCategory = async (req, res, next) => {
  try {
    const data = await Category.find();

    if (data) {
      res.status(200).json({
        category: data,
        message: 'Get all Category Success',
      });
    } else {
      next(Utils.createError('Category Not Found!', 404));
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Create a category
 * @name POST /category
 * @access public
 */
export const createCategory = async (req, res, next) => {
  try {
    const slug = Utils.createSlug(req.body.name);
    const data = await Category.create({ ...req.body, slug, photo: req.file ? req.file.filename : null });
    if (data) {
      res.status(200).json({
        category: data,
        message: 'Category Created Successful',
      });
    } else {
      next(Utils.createError('Category Not Created', 400));
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Get Single Category
 * @name GET /category/id
 * @access public
 */
export const getSingleCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const allData = await Category.find();
    const isValid = await allData.find((item) => item._id == id);

    if (isValid) {
      const data = await Category.findById(id);

      res.status(200).json({
        category: data,
        message: 'Single Category Get Successful',
      });
    } else {
      next(Utils.createError('Category Not Found', 404));
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Update Single Product Category
 * @name PUT/PATCH /category/id
 * @access public
 */
export const updateSingleCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    // Check id  validation
    const allData = await Category.find();
    const isValid = allData.find((item) => item._id == id);

    // Update Category
    if (isValid) {
      let photo = isValid.photo;
      if (req.file) {
        unlinkSync(`api/public/image/category/${isValid.photo}`);
        photo = req.file.filename;
      }

      const slug = Utils.createSlug(req.body.name);

      const data = await Category.findByIdAndUpdate(id, { ...req.body, slug, photo }, { new: true });
      res.status(200).json({
        category: data,
        message: 'Category Update Successful',
      });
    } else {
      next(Utils.createError('Category Not Updated! Try Again.', 400));
    }
  } catch (error) {
    next(error);
  }
};

// /**
//  * @desc Delete Product Category
//  * @name DELETE /category/id
//  * @access public
//  */
export const deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    // Check Validity for id
    const allData = await Category.find();
    const isValid = allData.find((item) => item._id == id);
    // Delete Category
    if (isValid) {
      isValid.photo && unlinkSync(`api/public/image/category/${isValid.photo}`);

      const data = await Category.findByIdAndDelete(id);
      res.status(200).json({
        category: data,
        message: 'Category Delete Successful',
      });
    } else {
      next(Utils.createError('Category Not Deleted!', 400));
    }
  } catch (error) {
    next(error);
  }
};
