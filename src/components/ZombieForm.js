import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCurrent, saveZombie } from '../reducers/zombie';

class ZombieForm extends Component {
	handleInputChange = (event) => {
		const value = event.target.value;
		this.props.updateCurrent(value);
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.saveZombie(this.props.currentZombie, this.state.selected);
	};

	handleDropDown = (event) => {
		this.setState({ selected: event.target.value });
	};

	componentDidMount = () => {
		this.setState({ selected: "Hospital"});
	};

	render() {
		const { currentZombie } = this.props;
		const location = ["Hospital", "School", "Warehouse"];
		let selected = location[0];
		return (
			<form onSubmit={this.handleSubmit}>
	    	<input type="text" 
	    	onChange={this.handleInputChange}
	    	value={currentZombie}
	    	placeholder="Add Zombie"/>
	    	<select name="select" onChange={this.handleDropDown}>
				  {location.map(function(n) { 
				      return (<option value={n} selected={selected === n}>{n}</option>);
				  })}
				</select>
	  	</form>
		);
	};
}

export default connect(
	(state) => ({ currentZombie: state.zombie.currentZombie }),
	{ updateCurrent, saveZombie }
)(ZombieForm);
