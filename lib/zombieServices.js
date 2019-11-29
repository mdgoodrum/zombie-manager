const baseUrl = 'http://localhost:3000'

export const getZombies = () => {
	return fetch(baseUrl)
		.then(res => res.json())
}

export const createZombie = (name, location) => {
	return fetch(baseUrl, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ name: name, location: location })
	})
		.then(res => res.json())
}

export const updateZombie = (zombie) => {
	return fetch(`${baseUrl}/${zombie.id}`, {
		method: 'PUT',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(zombie)
	})
		.then(res => res.json())
}

export const destroyZombie = (id) => {
	return fetch(`${baseUrl}/${id}`, {
		method: 'DELETE',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	})
}