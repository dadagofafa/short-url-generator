const express = require('express')
const router = express.Router()
const url = require('../../models/url')

router.get('/', (req, res) => {
  res.render('index')
})

module.exports = router