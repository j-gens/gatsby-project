import React from 'react';
import { Link } from 'gatsby';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Hot Now</Link>
        </li>
        <li>
          <Link to='/pizzas'>Pizzas</Link>
        </li>
        <li>
          <Link to='/'>LOGO</Link>
        </li>
        <li>
          <Link to='/masters'>Masters</Link>
        </li>
        <li>
          <Link to='/order'>Order Ahead</Link>
        </li>
      </ul>
    </nav>
  );
}
