import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectMongoDB from './config/db.js';
import categoryRouter from './routes/product/categoryRouter.js';
import brandRouter from './routes/product/brandRouter.js';
import tagRouter from './routes/product/tagRouter.js';
import productRouter from './routes/product/productRouter.js';
import { errorHandler } from './middleware/errorHandler.js';
import cors from 'cors';

// Configure dotenv
dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

// Manage Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set Static Folder
app.use(express.static('api/public'));

/**
 * Product, Category, Brand, Tag Router
 */
// Category Router
app.use('/api/v1/product/category', categoryRouter);
// Brand Router
app.use('/api/v1/product/brand', brandRouter);
// Tag Router
app.use('/api/v1/product/tag', tagRouter);
// Product Router
app.use('/api/v1/product', productRouter);

// Error Handling
app.use(errorHandler);

// Server listener
app.listen(PORT, () => {
  connectMongoDB();
  console.log(`Server is running on port : ${PORT}`.bgGreen.black);
});
