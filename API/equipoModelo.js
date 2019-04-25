const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Equipo = new Schema(
    {
      _id: Number,
      nombre: String,
      liga_id: {
        type: Number,
        ref: 'Liga'
      }
    },
    {
      collection: 'equipo',
      toJSON: { virtuals: true },
    }
  )
  
  module.exports = mongoose.model('Equipo', Equipo)