import express from 'express';
import { createBrand, deleteBrand, getAllBrand, getSingleBrand, updateSingleBrand } from '../../controller/brandController.js';
import { brandMulter } from '../../middleware/multer.js';

// Require Router
const router = express.Router();

router.route('/').get(getAllBrand).post(brandMulter, createBrand);
router.route('/:id').get(getSingleBrand).put(brandMulter, updateSingleBrand).patch(brandMulter, updateSingleBrand).delete(deleteBrand);

// export
export default router;
