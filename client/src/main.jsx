import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Store } from './redux/Store.jsx';
import ScrollToTop from 'react-scroll-to-top';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <ToastContainer />
      <App />
      <ScrollToTop smooth />
    </Provider>
  </React.StrictMode>
);
