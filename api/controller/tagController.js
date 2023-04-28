import Utils from '../utils/Utils.js';
import Tag from '../model/tagModel.js';

/**
 * @desc Get all product Tag
 * @name GET /
 * @access public
 */
export const getAllTag = async (req, res, next) => {
  try {
    const data = await Tag.find();
    if (data) {
      res.status(200).json({
        tag: data,
        message: 'Get all Tag success',
      });
    } else {
      next(Utils.createError('Tag Not Found!', 404));
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Create a tag
 * @name POST /
 * @access public
 */
export const createTag = async (req, res, next) => {
  try {
    const slug = Utils.createSlug(req.body.name);

    const data = await Tag.create({ ...req.body, slug });
    if (data) {
      res.status(200).json({
        tag: data,
        message: 'tag Created Successful',
      });
    } else {
      next(Utils.createError('tag Not Created', 400));
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Get Single Tag
 * @name GET /id
 * @access public
 */
export const getSingleTag = async (req, res, next) => {
  try {
    const { id } = req.params;
    const allData = await Tag.find();
    const isValid = await allData.find((item) => item._id == id);

    if (isValid) {
      const data = await Tag.findById(id);

      res.status(200).json({
        tag: data,
        message: 'Single Tag Get Successful',
      });
    } else {
      next(Utils.createError('Tag Not Found', 404));
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Update Single Product Tag
 * @name PUT/PATCH /id
 * @access public
 */
export const updateSingleTag = async (req, res, next) => {
  try {
    const { id } = req.params;
    // Check id  validation
    const allData = await Tag.find();
    const isValid = allData.find((item) => item._id == id);
    // Update Tag
    if (isValid) {
      const slug = Utils.createSlug(req.body.name);
      const data = await Tag.findByIdAndUpdate(id, { ...req.body, slug }, { new: true });
      res.status(200).json({
        tag: data,
        message: 'Tag Update Successful',
      });
    } else {
      next(Utils.createError('Tag Not Updated! Try Again.', 400));
    }
  } catch (error) {
    next(error);
  }
};

// /**
//  * @desc Delete Product Tag
//  * @name DELETE /id
//  * @access public
//  */
export const deleteTag = async (req, res, next) => {
  try {
    const { id } = req.params;
    // Check id Validity
    const allData = await Tag.find();
    const isValid = allData.find((item) => item._id == id);
    // Delete Tag
    if (isValid) {
      const data = await Tag.findByIdAndDelete(id);
      res.status(200).json({
        tag: data,
        message: 'Tag Delete Successful',
      });
    } else {
      next(Utils.createError('Tag Not Deleted!', 400));
    }
  } catch (error) {
    next(error);
  }
};
