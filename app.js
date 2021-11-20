const express = require('express')
const exphbs = require('express-handlebars')
require('./config/mongoose')


const app = express()
const port = 3000

app.engine('hbs', exphbs(({ defaultLayout: 'main', extname: '.hbs' })))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
  res.render('index')
})

app.get('/result', (req, res) => {
  res.render('result')
})

app.listen(port, () => {
  console.log(`Express is running on http://localbost:${port}`)
})


