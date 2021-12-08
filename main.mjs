import data from './data.json'

const dt = JSON.parse(JSON.stringify(data))
dt.users.forEach((item, i) => {
	console.log(`user ${i + 1}: ${item.firstName} ${item.lastName}, born at ${item.dateOfBirth} - ${item.knowsAs}`)
})
