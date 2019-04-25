const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Equipo = new Schema(
    {
      _id: Number,
      nombre: String,
      liga_id: Number
    },
    {
      collection: 'equipo',
      toJSON: { virtuals: true },
    }
  )
  
  module.exports = mongoose.model('equipo', Equipo)