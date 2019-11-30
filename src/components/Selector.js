import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (
	<div>
		<Link to='/'>All</Link>
		<Link to='/hospital'>Hospital</Link>
		<Link to='/school'>School</Link>
		<Link to='/warehouse'>Warehouse</Link>
	</div>
)