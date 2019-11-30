import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchZombies, updateCurrent, deleteZombie, getZombiesByLocation } from '../reducers/zombie';

const ZombieItem = ({id, name, location, updateCurrent, deleteZombie}) => (
	<li key={id}>
    {name}
  </li>
)

class ZombieList extends Component {
	componentDidMount() {
		this.props.fetchZombies();
	}
	render() {
		return (
			<div>
  			<ul>
    			{this.props.zombies.map(zombie => 
    				<ZombieItem key={zombie.id}  
    				name={zombie.name}
    				{...zombie} />)}
  			</ul>
  		</div>
		)
	}
}

export default connect(
	(state, ownProps) => ({ zombies: getZombiesByLocation(state.zombie.zombies, ownProps.location) }),
	{ fetchZombies, updateCurrent, deleteZombie }
)(ZombieList)