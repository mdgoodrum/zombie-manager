import React from 'react';
import { NavLink } from 'react-router-dom';

export default (props) => (
    <div>
      <ul id="nav">
	      <li><NavLink activeStyle={{ color: 'red' }} to='/all'>All</NavLink></li>
				<li><NavLink activeStyle={{ color: 'red' }} to='/hospital'>Hospital</NavLink></li>
				<li><NavLink activeStyle={{ color: 'red' }} to='/school'>School</NavLink></li>
				<li><NavLink activeStyle={{ color: 'red' }} to='/warehouse'>Warehouse</NavLink></li>
      </ul>
    </div>
)