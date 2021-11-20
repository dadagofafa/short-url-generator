const express = require('express')

const exphbs = require('express-handlebars')
const routes = require('./routes')
const url = require('./models/url')
const random5digits = require('./random5digits')

require('./config/mongoose')

const app = express()
const port = 3000

app.engine('hbs', exphbs(({ defaultLayout: 'main', extname: '.hbs' })))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.get('/:id', (req, res) => {
  const id = req.params.id
  url.find({ shortUrl: id })
    .then(data => res.redirect(data[0].originalUrl))
    .catch(error => console.log(error))
})

app.listen(port, () => {
  console.log(`Express is running on http://localbost:${port}`)
})


