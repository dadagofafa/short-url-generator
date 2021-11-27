const express = require('express')
const router = express.Router()
const URL = require('../../models/URL')
const random5digits = require('../../random5digits')

router.post('/', (req, res) => {
  if (!req.body.url) return res.redirect("/")
  const shortUrl = random5digits()
  URL.findOne({ originalUrl: req.body.originalUrl })
    .then(data => data ? data : URL.create({ originalUrl: req.body.originalUrl, shortUrl }))
    .then(data => res.render('result', { shortUrl: data.shortUrl, originalUrl: req.body.originalUrl }))
    .catch(error => console.log(error))
  })

module.exports = router