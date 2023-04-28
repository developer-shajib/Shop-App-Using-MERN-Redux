import multer from 'multer';

// Crete Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname == 'category-photo') {
      cb(null, 'api/public/image/category');
    }
    if (file.fieldname == 'brand-photo') {
      cb(null, 'api/public/image/brand');
    }
    if (file.fieldname == 'product_photo') {
      cb(null, 'api/public/image/productImg');
    }
    if (file.fieldname == 'product_gallery_photo') {
      cb(null, 'api/public/image/productGalImg');
    }
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '_' + file.originalname);
  },
});

export const categoryMulter = multer({ storage }).single('category-photo');
export const brandMulter = multer({ storage }).single('brand-photo');
export const productMulter = multer({ storage }).fields([
  {
    name: 'product_photo',
    maxCount: 1,
  },
  {
    name: 'product_gallery_photo',
    maxCount: 10,
  },
]);
