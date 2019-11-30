import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchZombies, updateCurrent, deleteZombie, getZombiesByLocation } from '../reducers/zombie';

const ZombieItem = ({id, name, location, updateCurrent, deleteZombie}) => (
	<li key={id}>
		<span className='delete-item'>
			<button onClick={() => deleteZombie(id)}>X</button>
		</span>
    {name}
  </li>
)

class ZombieList extends Component {
	componentDidMount() {
		this.props.fetchZombies();
		console.log('!!!!!', this.props, this.state);
	}
	render() {
		return (
			<div>
				<p>Total: {this.props.zombies.length}</p>
  			<ul>
    			{this.props.zombies.map(zombie => 
    				<ZombieItem key={zombie.id}  
    				name={zombie.name}
    				deleteZombie={this.props.deleteZombie}
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