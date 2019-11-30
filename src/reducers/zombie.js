import { getZombies, createZombie, updateZombie, destroyZombie } from '../lib/zombieServices';

const initState = {
	zombies: [],
	currentZombie: ''
};

export const ZOMBIES_LOAD = 'ZOMBIE_LOAD';
export const ZOMBIE_ADD = 'ZOMBIE_ADD';
export const ZOMBIE_REPLACE = 'ZOMBIE_REPLACE';
export const ZOMBIE_REMOVE = 'ZOMBIE_REMOVE';
const CURRENT_UPDATE = 'CURRENT_UPDATE';

export const updateCurrent = (value) => (
	{type: CURRENT_UPDATE, payload: value}
);

export const loadZombies = (zombies) => ({ type: ZOMBIES_LOAD, payload: zombies });

export const addZombie = (zombie) => ({ type: ZOMBIE_ADD, payload: zombie });

export const replaceZombie = (zombie) => ({ type: ZOMBIE_REPLACE, payload: zombie });

export const removeZombie = (id) => ({ type: ZOMBIE_REMOVE, payload: id });

export const fetchZombies = () => {
	return (dispatch) => {
		getZombies()
			.then(zombies => dispatch(loadZombies(zombies)))
	};
};

export const saveZombie = (name, location) => {
	return (dispatch) => {
		createZombie(name, location)
			.then(res => dispatch(addZombie(res)))
	};
};

export const moveZombie = (id, location) => {
	return (dispatch, getState) => {
		const { zombies } = getState().zombie;
		const zombie = zombies.find(z => z.id === id);
		const newLocation = { ...zombie, location: location};
		updateZombie(newLocation)
			.then(res => dispatch(replaceZombie(res)));
	};
};

export const deleteZombie = (id) => {
	return (dispatch) => {
		destroyZombie(id)
			.then(() => dispatch(removeZombie(id)));
	};
};

export const getZombiesByLocation = (zombies, location) => {
	switch(location) {
		case 'hospital':
			return zombies.filter(z => z.location === 'Hospital');
		case 'school':
			return zombies.filter(z => z.location === 'School');
		case 'warehouse':
			return zombies.filter(z => z.location === 'Warehouse');
		default:
			return zombies;
	};
};

export default (state = initState, action) => {
	switch (action.type) {
		case ZOMBIE_ADD:
			return {...state, currentZombie: '', zombies: state.zombies.concat(action.payload)};
		case ZOMBIES_LOAD:
			return {...state, zombies: action.payload};
		case CURRENT_UPDATE:
			return {...state, currentZombie: action.payload};
		case ZOMBIE_REPLACE:
			return {...state, zombies: state.zombies.map(z => z.id === action.payload.id ? action.payload : z)}	;
		case ZOMBIE_REMOVE:
			return {...state, zombies: state.zombies.filter(z => z.id !== action.payload)};
		default: 
			return state;
	};
};
