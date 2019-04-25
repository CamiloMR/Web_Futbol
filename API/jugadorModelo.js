const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Jugador = new Schema(
    {
      _id: Number,
      nombre: String,
      equipo_id: Number
    },
    {
      collection: 'jugador',
      toJSON: { virtuals: true },
    }
  )
  
  module.exports = mongoose.model('jugador', Jugador)