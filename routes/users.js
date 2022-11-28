const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

// GET users from JSONplaceholder API
router.get('/', function (req, res, next) {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(res => res.json())
		.then(users => {
			console.log(users)
			res.json({ users })
		})
})

module.exports = router
