const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlSchema = new Schema({
  originalUrl: {
    type: String,
  },
  shortUrl: {
    type: String,
  }

})

module.exports = mongoose.model('URL', urlSchema)