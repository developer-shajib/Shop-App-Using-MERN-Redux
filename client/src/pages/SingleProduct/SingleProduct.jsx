import { Button, Col, Container, Row } from 'react-bootstrap';

import { BiHome } from 'react-icons/bi';
import { RxDividerHorizontal } from 'react-icons/rx';
import { BsPlusLg, BsTwitter } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdCompare } from 'react-icons/md';
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SubTitle from '../../components/SubTitle/SubTitle.jsx';
import Product from '../../components/Product/Product.jsx';
import Slider from 'react-slick';
import './SingleProduct.scss';

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(0);

  // react slick setting for related product
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    swipeToSlide: true,
  };
  // react slick setting for gallery image
  let settingsImg = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    swipeToSlide: true,
  };

  return (
    <>
      <section className='single-product'>
        {/* ------- Single Product Breadcrumb Start ------ */}
        <section className='breadcrumb'>
          <Container>
            <Row>
              <Col className='left-side' md='6'>
                <h2>Product</h2>
              </Col>
              <Col className='right-side' md='6'>
                <p>
                  <span>
                    <BiHome />
                  </span>
                  &nbsp; /&nbsp;Home&nbsp;/&nbsp;Product
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        {/* ------- Single Product Breadcrumb End ------ */}

        {/* ------- Single Product Page Start ------ */}
        <section className='product-section py-5'>
          <Container>
            <Row>
              {/* ------- Product Image Start ------ */}
              <Col md='6' className='product-image'>
                {' '}
                <img
                  className='main-img'
                  src='https://mobilepricetoday.com/wp-content/uploads/2022/04/Samsung-Galaxy-A13-price-in-Bangladesh-4.png'
                  alt=''
                />
                <div className='gal-img-slider-wrap'>
                  <Slider {...settingsImg} className='r-slider'>
                    <div className='gal-img'>
                      <img
                        src='https://mobilepricetoday.com/wp-content/uploads/2022/04/Samsung-Galaxy-A13-price-in-Bangladesh-4.png'
                        alt=''
                      />
                    </div>
                    <div className='gal-img'>
                      <img
                        src='https://mobilepricetoday.com/wp-content/uploads/2022/04/Samsung-Galaxy-A13-price-in-Bangladesh-4.png'
                        alt=''
                      />
                    </div>
                    <div className='gal-img'>
                      <img
                        src='https://mobilepricetoday.com/wp-content/uploads/2022/04/Samsung-Galaxy-A13-price-in-Bangladesh-4.png'
                        alt=''
                      />
                    </div>
                    <div className='gal-img'>
                      <img
                        src='https://mobilepricetoday.com/wp-content/uploads/2022/04/Samsung-Galaxy-A13-price-in-Bangladesh-4.png'
                        alt=''
                      />
                    </div>
                    <div className='gal-img'>
                      <img
                        src='https://mobilepricetoday.com/wp-content/uploads/2022/04/Samsung-Galaxy-A13-price-in-Bangladesh-4.png'
                        alt=''
                      />
                    </div>
                  </Slider>
                </div>
              </Col>

              {/* ------- Single Product Info ------ */}
              <Col md='6' className='single-product-info'>
                <h3>Samsung Galaxy S23 Ultra</h3>

                <div className='price'>
                  <del>30,000</del>/<span>20,000</span>
                </div>
                <p className='short_desc'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro iste eveniet eius, voluptatem
                  cupiditate illum magni corporis ducimus quibusdam nihil?
                </p>

                <div className='quantity'>
                  <p>Quantity : </p>
                  <div className='q-btn'>
                    <Button onClick={() => setQuantity(quantity <= 0 ? 0 : quantity - 1)}>
                      <RxDividerHorizontal />
                    </Button>
                    <input type='text' value={quantity} />
                    <Button onClick={() => setQuantity(quantity + 1)}>
                      <BsPlusLg />
                    </Button>
                  </div>
                </div>

                <Button className='add-cart'>Add To Cart</Button>
                <div className='btn-g'>
                  <Button>
                    <span>
                      <AiOutlineHeart />
                    </span>
                    <p>Add to Wishlist</p>
                  </Button>
                  <p className='mb-0' style={{ fontSize: '30px', color: 'var(--red-color)' }}>
                    ।
                  </p>
                  <Button>
                    <span>
                      <MdCompare />
                    </span>
                    <p>Compare</p>
                  </Button>
                </div>
                <hr />
                <div className='product-info'>
                  <p>
                    SKU : <span>1530</span>
                  </p>
                  <p>
                    Categories : <span>Samsung</span>
                  </p>
                  <p>
                    Tag : <span>Mobile</span>
                  </p>
                  <p>
                    Brand : <span>Samsung</span>
                  </p>
                </div>
                <hr />
                <p className='p-share'>
                  Share :
                  <ul>
                    <li>
                      <a href='#'>
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <BsTwitter />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaPinterestP />
                      </a>
                    </li>
                  </ul>
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        {/* ------- Single Product Page End ------ */}

        {/* ------- Single Product related product page Start ------ */}
        <section className='r-product-section'>
          <Container>
            <Row>
              <Col md='12' className='r-title'>
                <SubTitle title='Related Product' justifyContent='left' textAlign='left' />
              </Col>
              <Col md='12' className='r-product py-2 '>
                <Slider {...settings} className='r-slider'>
                  <div>
                    <Product />
                  </div>
                  <div>
                    <Product />
                  </div>
                  <div>
                    <Product />
                  </div>
                  <div>
                    <Product />
                  </div>
                  <div>
                    <Product />
                  </div>
                  <div>
                    <Product />
                  </div>
                </Slider>
              </Col>
            </Row>
          </Container>
        </section>
        {/* ------- Single Product related product page End ------ */}
      </section>
    </>
  );
};

export default SingleProduct;
