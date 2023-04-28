import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu1 = () => {
  return (
    <ul>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='shop'>Shop</NavLink>
      </li>
      <li>
        <NavLink to='cart'>Cart</NavLink>
      </li>
      <li>
        <NavLink to='admin'>Admin</NavLink>
      </li>
      <li>
        <NavLink to='wishlist'>Wishlist</NavLink>
      </li>
    </ul>
  );
};

export default Menu1;
