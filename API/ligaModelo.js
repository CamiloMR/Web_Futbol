const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Liga = new Schema(
    {
      _id: Number,
      nombre: String,
      pais: String
    },
    {
      collection: 'liga',
      toJSON: { virtuals: true },
    }
  )
  
  module.exports = mongoose.model('Liga', Liga)