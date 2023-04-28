import { RouterProvider } from 'react-router-dom';
import { PublicRouter } from './routes/PublicRouter.jsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllBrands } from './redux/Shop/Action/BrandAction.jsx';
import { getAllTag } from './redux/Shop/Action/TagAction.jsx';
import { getAllCategories } from './redux/Shop/Action/CategoryAction.jsx';
import { getAllProduct } from './redux/Shop/Action/ProductsAction.jsx';

function App() {
  const dispatch = useDispatch();

  // Static Header
  onscroll = () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', scrollY > 0);
  };

  // Get All State Data
  useEffect(() => {
    dispatch(getAllProduct());
    dispatch(getAllBrands());
    dispatch(getAllTag());
    dispatch(getAllCategories());
  }, [dispatch]);

  return <RouterProvider router={PublicRouter} />;
}

export default App;
