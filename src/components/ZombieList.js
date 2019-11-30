import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchZombies, updateCurrent, deleteZombie, getZombiesByLocation, moveZombie } from '../reducers/zombie';

const ZombieItem = ({id, name, location, updateCurrent, deleteZombie, selected, moveZombie}) => (
	<li key={id}>
		<span className='delete-item'>
			<button onClick={() => deleteZombie(id)}>X</button>
		</span>
    {name}
    <select name="select" onChange={(e) => moveZombie(id, e.target.value)}>
		  {["Hospital", "School", "Warehouse"].map(function(n) { 
		      return (<option value={n} selected={selected === n}>{n}</option>);
		  })}
		</select>
  </li>
)

class ZombieList extends Component {
	componentDidMount() {
		this.props.fetchZombies();
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
    				moveZombie={this.props.moveZombie}
    				selected={zombie.location}
    				{...zombie} />)}
  			</ul>
  		</div>
		)
	}
}

export default connect(
	(state, ownProps) => ({ zombies: getZombiesByLocation(state.zombie.zombies, ownProps.location) }),
	{ fetchZombies, updateCurrent, deleteZombie, moveZombie }
)(ZombieList)