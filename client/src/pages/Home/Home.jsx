import React, { useState } from 'react';
import { Col, Container, Form, Pagination, Row } from 'react-bootstrap';
import { TbTruckDelivery } from 'react-icons/tb';
import Typed from 'react-typed';
import aboutImg from '../../assets/image/about.jpg';
import './Home.scss';
import SubTitle from '../../components/SubTitle/SubTitle.jsx';
import Product from '../../components/Product/Product.jsx';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      {/* -------------- Banner Start  ------------- */}
      <section className='banner-section'>
        <div className='banner-content'>
          <h2>BIG SALE Offer, 40% Off</h2>
          <h4>
            <Typed
              strings={[
                'Here you can find anything',
                'You can get 40% Off discount',
                'Free Shipping',
                '30 Days Return',
              ]}
              loop
              typeSpeed={30}
              backSpeed={20}
            />
          </h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit dolores aspernatur dolorem tenetur hic!</p>
          <button>Shop Now</button>
        </div>
      </section>
      {/* -------------- Banner End  ------------- */}

      {/* -------------- Service Content Start  ------------- */}
      <section className='b-service-content'>
        <Container>
          <Row>
            <Col md='3' className='content'>
              <h3>
                <TbTruckDelivery />
              </h3>
              <div className='content-info'>
                <h3>Free Shipping</h3>
                <p>Free Shipping on orders $199.</p>
              </div>
            </Col>
            <Col md='3' className='content'>
              <h3>
                <TbTruckDelivery />
              </h3>
              <div className='content-info'>
                <h3>Free Shipping</h3>
                <p>Free Shipping on orders $199.</p>
              </div>
            </Col>
            <Col md='3' className='content'>
              <h3>
                <TbTruckDelivery />
              </h3>
              <div className='content-info'>
                <h3>Free Shipping</h3>
                <p>Free Shipping on orders $199.</p>
              </div>
            </Col>
            <Col md='3' className='content'>
              <h3>
                <TbTruckDelivery />
              </h3>
              <div className='content-info'>
                <h3>Free Shipping</h3>
                <p>Free Shipping on orders $199.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* -------------- Service Content End  ------------- */}

      {/* <!-- About Start --> */}
      <div className='about-section container-xxl py-5'>
        <div className='container'>
          <div className='row g-5 align-items-center'>
            <div className='col-lg-6 wow fadeIn' data-wow-delay='0.1s'>
              <div className='about-img position-relative overflow-hidden p-5 pe-0'>
                <img className='img-fluid w-100' src={aboutImg} />
              </div>
            </div>
            <div className='col-lg-6 wow fadeIn right-side' data-wow-delay='0.5s'>
              <h1 className='display-5 mb-4'>Best Organic Fruits And Vegetables</h1>
              <p className='mb-4'>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
                ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <p>
                <i className='fa fa-check text-primary me-3'></i>Tempor erat elitr rebum at clita
              </p>
              <p>
                <i className='fa fa-check text-primary me-3'></i>Aliqu diam amet diam et eos
              </p>
              <p className='mb-4'>
                <i className='fa fa-check text-primary me-3'></i>Clita duo justo magna dolore erat amet
              </p>
              <a className='read-more-btn' href=''>
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About Section End --> */}

      {/* ------- Product Start ---------- */}
      <section className='product-section'>
        <Container>
          <Row>
            <Col md='12'>
              <SubTitle
                title='Our Products'
                desc='Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.'
                justifyContent='center'
                textAlign='center'
                jus
              />
            </Col>
          </Row>
          <Row>
            <Col className='product-content' md='3'>
              <Product />
            </Col>
            <Col className='product-content' md='3'>
              <Product />
            </Col>
            <Col className='product-content' md='3'>
              <Product />
            </Col>
            <Col className='product-content' md='3'>
              <Product />
            </Col>
            <Col md='3'>
              <Product />
            </Col>
            <Col className='product-content' md='3'>
              <Product />
            </Col>
            <Col className='product-content' md='3'>
              <Product />
            </Col>
            <Col className='product-content' md='3'>
              <Product />
            </Col>
            <Col className='product-content' md='3'>
              <Product />
            </Col>
            <Col className='product-content' md='3'>
              <Product />
            </Col>
            <Col className='product-content' md='3'>
              <Product />
            </Col>
            <Col className='product-content' md='3'>
              <Product />
            </Col>
            <Col className='product-content' md='3'>
              <Product />
            </Col>
            <Col className='product-content' md='3'>
              <Product />
            </Col>
            <Col className='product-content' md='3'>
              <Product />
            </Col>
            <Col className='product-content' md='3'>
              <Product />
            </Col>
            <Col className='product-content' md='3'>
              <Product />
            </Col>
            <Col className='product-content' md='3'>
              <Product />
            </Col>
            <Col className='product-content' md='3'>
              <Product />
            </Col>
            <Col className='product-content' md='3'>
              <Product />
            </Col>
            <Col className='product-content' md='3'>
              <Product />
            </Col>
            <Col className='product-content' md='3'>
              <Product />
            </Col>

            <Col md='12' className='pagination text-center d-flex justify-content-center pt-4 '>
              <Pagination>
                <Pagination.First />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item active>{4}</Pagination.Item>
                <Pagination.Item>{5}</Pagination.Item>
                <Pagination.Item>{6}</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Item>{21}</Pagination.Item>
                <Pagination.Item>{22}</Pagination.Item>
                <Pagination.Last />
              </Pagination>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ------- Product End ---------- */}
    </div>
  );
};

export default Home;
