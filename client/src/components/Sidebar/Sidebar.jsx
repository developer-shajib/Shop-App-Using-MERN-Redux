import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = () => {
  const [range, setRange] = useState(0);
  return (
    <>
      <div className='sidebar-area'>
        <div className='sidebar-widget'>
          <h5 className='widget-title'>Search Product</h5>
          <hr />
          <Form.Control type='search' placeholder='Search...' />
        </div>

        <div className='sidebar-widget'>
          <h5 className='widget-title'>Search With Price</h5>
          <hr />
          <div className='price-search'>
            <Form.Control type='number' placeholder='Min' />
            <Form.Control type='number' placeholder='Max' />
            <Button>Search</Button>
          </div>
        </div>

        <div className='sidebar-widget'>
          <h5 className='widget-title'>Price Range</h5>
          <hr />
          <div className='price-search d-flex flex-column g-0'>
            <div className='w-100 range-info d-flex justify-content-between'>
              <p className='mb-0'>Min</p>
              <h5>{range} BDT</h5>
              <p className='mb-0'>Max</p>
            </div>
            <Form.Range
              onChange={(e) => setRange(e.target.value)}
              value={range}
              min='10'
              max='10000'
              step='5'
              style={{ border: 'none' }}
            />
          </div>
        </div>

        <div className='sidebar-widget'>
          <h5 className='widget-title'>Categories</h5>
          <hr />
          <ul>
            <li>
              <Form.Check type='checkbox' label='Men'></Form.Check>
              <Form.Check type='checkbox' label='Men'></Form.Check>
              <Form.Check type='checkbox' label='Men'></Form.Check>
              <Form.Check type='checkbox' label='Men'></Form.Check>
            </li>
          </ul>
        </div>

        <div className='sidebar-widget'>
          <h5 className='widget-title'>Brands</h5>
          <hr />
          <ul>
            <li>
              <Form.Check type='checkbox' label='Men'></Form.Check>
              <Form.Check type='checkbox' label='Men'></Form.Check>
              <Form.Check type='checkbox' label='Men'></Form.Check>
              <Form.Check type='checkbox' label='Men'></Form.Check>
            </li>
          </ul>
        </div>

        <div className='sidebar-widget'>
          <h5 className='widget-title'>Tags</h5>
          <hr />
          <div className='tags-items'>
            <Link>Eid</Link>
            <Link>Ramadan</Link>
            <Link>Puja</Link>
            <Link>Puja</Link>
            <Link>Puja</Link>
            <Link>Puja</Link>
            <Link>Puja</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
