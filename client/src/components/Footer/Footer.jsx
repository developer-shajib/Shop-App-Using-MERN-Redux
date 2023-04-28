import React from 'react';
import Icon from '../../assets/sticky-logo.png';
import { Col, Container, Row } from 'react-bootstrap';
import { IoIosArrowForward } from 'react-icons/io';
import {
  BsFillSendFill,
  BsFillTelephoneForwardFill,
  BsWhatsapp,
} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Footer.scss';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          {/* ----------------- Brand ----------------- */}
          <Col md='3' className='footer-brand'>
            <img src={Icon} alt='' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et animi
              deleniti dolor odio quam reiciendis illo in quae, ab molestiae.
            </p>
            <div className='phone'>
              <div className='phone-icon'>
                <BsFillTelephoneForwardFill />
              </div>
              <div className='phone-info'>
                <a href='#'>+880124547358</a>
                <span>Get in touch with us.</span>
              </div>
            </div>
          </Col>

          {/* ----------------- Menu ----------------- */}
          <Col md='3' className='footer-menu'>
            <h5>Menu</h5>
            <ul>
              <li>
                <Link to=''>
                  <IoIosArrowForward />
                  Home
                </Link>
              </li>
              <li>
                <Link to=''>
                  <IoIosArrowForward /> Shop
                </Link>
              </li>
              <li>
                <Link to=''>
                  <IoIosArrowForward /> Product
                </Link>
              </li>
              <li>
                <Link to=''>
                  <IoIosArrowForward /> Contact
                </Link>
              </li>
              <li>
                <Link to=''>
                  <IoIosArrowForward /> Account
                </Link>
              </li>
            </ul>
          </Col>

          {/* ----------------- Account ----------------- */}
          <Col md='3' className='footer-account'>
            <h5>My Activities</h5>
            <ul>
              <li>
                <Link to=''>
                  <IoIosArrowForward /> Wishlist
                </Link>
              </li>
              <li>
                <Link to=''>
                  <IoIosArrowForward /> Cart
                </Link>
              </li>
              <li>
                <Link to=''>
                  <IoIosArrowForward /> Checkout
                </Link>
              </li>
              <li>
                <Link to=''>
                  <IoIosArrowForward /> Shop Single
                </Link>
              </li>
            </ul>
          </Col>

          {/* ----------------- NewsLetter ----------------- */}
          <Col md='3' className='footer-newsletter'>
            <h5>Newsletter</h5>
            <p>Sign Up To Our Newsletter to get the latest News and Offers</p>
            <div className='footer-form'>
              <input type='input' placeholder='Enter your email' />
              <button>
                <BsFillSendFill />
              </button>
            </div>
            <div className='social-icon'>
              <a href='#'>
                <FaFacebookF />
              </a>
              <a href='#'>
                <FaTwitter />
              </a>
              <a href='#'>
                <FaLinkedinIn />
              </a>
              <a href='#'>
                <BsWhatsapp />
              </a>
            </div>
          </Col>
        </Row>

        {/* ----------------- Footer Bottom ----------------- */}
        <Row>
          <Col md='12' className='footer-text'>
            <p>&copy; All rights reserved by devsShajib </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
