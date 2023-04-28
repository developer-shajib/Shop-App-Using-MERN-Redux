import express from 'express';
import { getAllCategory, createCategory, getSingleCategory, updateSingleCategory, deleteCategory } from '../../controller/categoryController.js';
import { categoryMulter } from '../../middleware/multer.js';

// Require Router
const router = express.Router();

router.route('/').get(getAllCategory).post(categoryMulter, createCategory);
router
  .route('/:id')
  .get(getSingleCategory)
  .put(categoryMulter, updateSingleCategory)
  .patch(categoryMulter, updateSingleCategory)
  .delete(deleteCategory);

// export
export default router;
