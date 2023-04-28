import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cart1 from '../../assets/image/cat-01.png';
import cart2 from '../../assets/image/cat-02.png';
import cart3 from '../../assets/image/cat-03.png';
import cart4 from '../../assets/image/cat-04.png';
import cart5 from '../../assets/image/cat-05.png';
import cart6 from '../../assets/image/cat-06.png';
import { BiHome } from 'react-icons/bi';
import Product from '../../components/Product/Product.jsx';
import SubTitle from '../../components/SubTitle/SubTitle.jsx';
import './Shop.scss';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';

const Shop = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    // autoplay: true,
    arrows: false,
  };

  return (
    <>
      <div className='shop'>
        {/* ------- Shop Page Breadcrumb Start ------ */}
        <section className='breadcrumb'>
          <Container>
            <Row>
              <Col className='left-side' md='6'>
                <h2>Shop</h2>
              </Col>
              <Col className='right-side' md='6'>
                <p>
                  <span>
                    <BiHome />
                  </span>
                  &nbsp; /&nbsp;Home&nbsp;/&nbsp;Shop
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        {/* ------- Shop Page Breadcrumb End ------ */}

        {/* ------- Shop Banner Start ------ */}
        <section className='shop-banner'>
          <Container>
            <Row>
              <Slider {...settings}>
                <div className='category-slider'>
                  <img src={cart1} alt='' />
                  <div className='cat-slider-info'>
                    <p>Women</p>
                    <span>3 product</span>
                  </div>
                </div>
                <div className='category-slider'>
                  <img src={cart2} alt='' />
                  <div className='cat-slider-info'>
                    <p>Men</p>
                    <span>3 product</span>
                  </div>
                </div>
                <div className='category-slider'>
                  <img src={cart3} alt='' />
                  <div className='cat-slider-info'>
                    <p>Jacket</p>
                    <span>2 product</span>
                  </div>
                </div>
                <div className='category-slider'>
                  <img src={cart4} alt='' />
                  <div className='cat-slider-info'>
                    <p>Sari</p>
                    <span>4 product</span>
                  </div>
                </div>
                <div className='category-slider'>
                  <img src={cart5} alt='' />
                  <div className='cat-slider-info'>
                    <p>Shoes</p>
                    <span>10 product</span>
                  </div>
                </div>
                <div className='category-slider'>
                  <img src={cart6} alt='' />
                  <div className='cat-slider-info'>
                    <p>Punjabi</p>
                    <span>6 product</span>
                  </div>
                </div>
              </Slider>
            </Row>
          </Container>
        </section>
        {/* ------- Shop Banner End ------ */}

        {/* ------- Shop Product Start ------ */}
        <section className='product'>
          <Container>
            <Row>
              <Col md='12' style={{ height: '200px' }}>
                <SubTitle
                  title='All Product'
                  desc='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quo repellat quam eos magnam?'
                />
              </Col>
            </Row>
            <hr />
            <Row>
              {/* ------- Filter Bar Start ------ */}
              <Col md='3' className='filter'>
                <Sidebar />
              </Col>
              {/* ------- Filter Bar Start ------ */}

              {/* ------- Product Start ------ */}
              <Col md='9' className='shop-product'>
                <Row>
                  <Col className='p-content' md='4'>
                    <Product />
                  </Col>
                  <Col className='p-content' md='4'>
                    <Product />
                  </Col>
                  <Col className='p-content' md='4'>
                    <Product />
                  </Col>
                  <Col className='p-content' md='4'>
                    <Product />
                  </Col>
                  <Col className='p-content' md='4'>
                    <Product />
                  </Col>
                  <Col className='p-content' md='4'>
                    <Product />
                  </Col>
                  <Col className='p-content' md='4'>
                    <Product />
                  </Col>
                  <Col className='p-content' md='4'>
                    <Product />
                  </Col>
                  <Col className='p-content' md='4'>
                    <Product />
                  </Col>
                  <Col className='p-content' md='4'>
                    <Product />
                  </Col>
                  <Col className='p-content' md='4'>
                    <Product />
                  </Col>
                  <Col className='p-content' md='4'>
                    <Product />
                  </Col>
                  <Col className='p-content' md='4'>
                    <Product />
                  </Col>
                  <Col className='p-content' md='4'>
                    <Product />
                  </Col>
                </Row>
              </Col>
              {/* ------- Product Start ------ */}
            </Row>
          </Container>
        </section>
        {/* ------- Shop Product End ------ */}
      </div>
    </>
  );
};

export default Shop;
