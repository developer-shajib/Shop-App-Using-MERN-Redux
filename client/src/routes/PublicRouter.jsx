import { createBrowserRouter } from 'react-router-dom';
import Shop from '../pages/Shop/Shop.jsx';
import Layout from '../components/Layout/Layout.jsx';
import Home from '../pages/Home/Home.jsx';
import Admin from '../pages/Admin/Admin.jsx';
import Cart from '../pages/Cart/Cart.jsx';
import Wishlist from '../pages/Wishlist/Wishlist.jsx';
import SingleProduct from '../pages/SingleProduct/SingleProduct.jsx';
import Category from '../components/Admin/Categories/Category.jsx';
import Brand from '../components/Admin/Brands/Brand.jsx';
import Tag from '../components/Admin/Tags/Tag.jsx';
import Dashboard from '../components/Admin/Dashboard/Dashboard.jsx';
import Product from '../components/Admin/Product/Product.jsx';

// Create Router
export const PublicRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'admin',
        element: <Admin />,
        children: [
          {
            path: 'dashboard',
            element: <Dashboard />,
          },
          {
            path: 'product',
            element: <Product />,
          },
          {
            path: 'category',
            element: <Category />,
          },
          {
            path: 'brand',
            element: <Brand />,
          },
          {
            path: 'tag',
            element: <Tag />,
          },
        ],
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'wishlist',
        element: <Wishlist />,
      },
      {
        path: '/:slug',
        element: <SingleProduct />,
      },
    ],
  },
]);
