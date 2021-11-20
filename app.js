const express = require('express')
const exphbs = require('express-handlebars')
require('./config/mongoose')

const url = require('./models/url')
const random5digits = require('./random5digits')

const app = express()
const port = 3000

app.engine('hbs', exphbs(({ defaultLayout: 'main', extname: '.hbs' })))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
  res.render('index')
})

app.get('/:id', (req, res) => {
  const id = req.params.id
  url.find({ shortUrl: id })
    .then(data => res.redirect(data[0].originalUrl))
    .catch(error => console.log(error))
})

app.post('/', (req, res) => {
  const shortUrl = random5digits()
  url.findOne({ originalUrl: req.body.originalUrl })
    .then(data => data ? data : url.create({ originalUrl: req.body.originalUrl, shortUrl }))
    .then(data => res.render('result', { shortUrl: data.shortUrl, originalUrl: req.body.originalUrl }))
    .catch(error => console.log(error))
})

app.listen(port, () => {
  console.log(`Express is running on http://localbost:${port}`)
})


