import mongoose from 'mongoose';

// schema
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      trim: true,
      unique: true,
    },
    sale_price: {
      type: Number,
      trim: true,
      default: null,
    },
    regular_price: {
      type: Number,
      trim: true,
      required: true,
      default: null,
    },
    stock: {
      type: Number,
      trim: true,
      default: null,
    },
    short_desc: {
      type: String,
      trim: true,
    },
    long_desc: {
      type: String,
      trim: true,
    },
    photo: {
      type: String,
      trim: true,
      default: null,
    },
    gallery: {
      type: Array,
      trim: true,
      default: null,
    },
    categories: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Category',
    },
    tags: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Tag',
    },
    brands: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Brand',
    },
    status: {
      type: Boolean,
      default: true,
    },
    trash: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// export model
export default mongoose.model('Product', productSchema);
