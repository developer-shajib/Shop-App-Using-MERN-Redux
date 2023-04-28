import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Icon from '../../assets/logo.png';
import Menu1 from '../Menu1/Menu1.jsx';
import { BsFillCartFill } from 'react-icons/bs';
import { MdCompare } from 'react-icons/md';
import { AiFillHeart } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Header.scss';
import DarkToggle from '../darkToggle/DarkToggle.jsx';

const Header = () => {
  return (
    <header>
      <Container>
        <Row className='d-flex align-items-center'>
          {/*  ----------------- Icon ------------------- */}
          <Col md='3' className='icon'>
            <Link to='/'>
              <img src={Icon} alt='Icon' className='icon' />
            </Link>
          </Col>

          {/* ------------------ Menu Part -------------------- */}
          <Col className='menu' md='5'>
            <Menu1 />
          </Col>

          {/* ------------------ Widget Part ------------------ */}
          <Col className='menu-widget' md='2'>
            <ul>
              <li className='h-cart'>
                <BsFillCartFill />
              </li>
              <li>
                <MdCompare />
              </li>
              <li>
                <AiFillHeart />
              </li>
              <li>
                <FaSearch />
              </li>
            </ul>
          </Col>
          <Col md='2'>
            <DarkToggle />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
