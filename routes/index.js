var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
	res.render('index.html')
})

router.post('/upload-file', async (req, res, next) => {
	let result = false
	const files = req.files
	console.log('> Incoming files from frontend _', files)
	if(files) result = true
	res.json({ success: result })
})

module.exports = router
