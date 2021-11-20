const express = require('express')
const router = express.Router()
const url = require('../../models/url')
const random5digits = require('../../random5digits')

router.post('/', (req, res) => {
    const shortUrl = random5digits()
    url.findOne({ originalUrl: req.body.originalUrl })
      .then(data => data ? data : url.create({ originalUrl: req.body.originalUrl, shortUrl }))
      .then(data => res.render('result', { shortUrl: data.shortUrl, originalUrl: req.body.originalUrl }))
      .catch(error => console.log(error))
  })

module.exports = router