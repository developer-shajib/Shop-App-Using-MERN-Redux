import express from 'express';
import { crateProduct, getAllProduct, getSingleProduct, updateSingleProduct, deleteSingleProduct } from '../../controller/productController.js';
import { productMulter } from '../../middleware/multer.js';

// Require Router
const router = express.Router();

router.route('/').get(getAllProduct).post(productMulter, crateProduct);
router.route('/:slug').get(getSingleProduct);
router.route('/:id').put(productMulter, updateSingleProduct).patch(productMulter, updateSingleProduct).delete(deleteSingleProduct);
//   .delete(deleteCategory);

// export
export default router;
