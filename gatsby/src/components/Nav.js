import React from 'react';
import { Link } from 'gatsby';

function Nav() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Hot now</Link>
        </li>
        <li>
          <Link to="/pizzas">Pizza Menu</Link>
        </li>
        <li>
          <Link to="/">LOGO</Link>
        </li>
        <li>
          <Link to="/slicemasters">Slicemasters</Link>
        </li>
        <li>
          <Link to="/order">Order now</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
