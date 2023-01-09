const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

// GET users from JSONplaceholder API
router.get('/', async function (req, res, next) {
	const rawRes = await fetch('https://jsonplaceholder.typicode.com/users')
	const jsonRes = await rawRes.json()
	jsonRes ? console.log(jsonRes) : res.json({ success: false, users: null })
	res.json({ success: true, users: jsonRes })
})

//POST user login
router.post('/login', function (req, res, next) {
	console.log(req.body)
	let result = false
	let user = null
	const { username, email, password } = req.body
	if (username && email && password) (result = true), (user = { username, email, password })
	res.json({ success: result, user })
})

module.exports = router
