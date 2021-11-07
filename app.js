const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/short-url-generator')

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

app.engine('hbs', exphbs(({ defaultLayout: 'main', extname: '.hbs' })))
app.set('view engine', 'hbs')
pp.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Express is running on http://localbost:${port}`)
})


