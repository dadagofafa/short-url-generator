const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes')
const URL = require('./models/URL')
const random5digits = require('./random5digits')

require('./config/mongoose')

const app = express()
const port = 3000

app.engine('hbs', exphbs(({ defaultLayout: 'main', extname: '.hbs' })))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.get('/:shortUrl', (req, res) => {
  const { shortUrl } = req.params

  URL.findOne({ shortUrl })
    .then(data => {
      if (!data) {
        return res.render("error", {
          errorMessage: "Can't found the URL",
          errorURL: req.headers.host + "/" + shortUrl,
        })
      }
      res.redirect(data.originalURL)
    })
    .catch(error => console.error(error))
})

app.listen(port, () => {
  console.log(`Express is running on localhost:${port}`)
})


