import { Link } from 'react-router-dom';
import tomato from '../../assets/image/product-1.jpg';
import { AiFillEye, AiFillShopping } from 'react-icons/ai';
import './Product.scss';

const Product = () => {
  return (
    <>
      <div class='product-item'>
        <div class='position-relative bg-light overflow-hidden'>
          <Link to='/:slug'>
            <img class='img-fluid w-100' src={tomato} alt='' />
          </Link>
          <div class='p-badge bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3'>New</div>
        </div>
        <div class='sale-info text-center p-4'>
          <Link class='d-block h5 mb-2' to='/:slug'>
            Fresh Tomato
          </Link>
          <span class='text-primary me-1'>$19.00</span>
          <span class='text-body text-decoration-line-through'>$29.00</span>
        </div>
        <div class='action-btn d-flex border-top'>
          <small class='w-50 text-center border-end py-2'>
            <a class='text-body' href=''>
              <AiFillEye /> View detail
            </a>
          </small>
          <small class='w-50 text-center py-2'>
            <a class='text-body' href=''>
              <AiFillShopping /> Add to cart
            </a>
          </small>
        </div>
      </div>
    </>
  );
};

export default Product;
