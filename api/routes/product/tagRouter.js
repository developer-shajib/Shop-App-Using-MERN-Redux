import express from 'express';
import { createTag, deleteTag, getAllTag, getSingleTag, updateSingleTag } from '../../controller/tagController.js';

// Require Router
const router = express.Router();

router.route('/').get(getAllTag).post(createTag);
router.route('/:id').get(getSingleTag).put(updateSingleTag).patch(updateSingleTag).delete(deleteTag);

// export
export default router;
