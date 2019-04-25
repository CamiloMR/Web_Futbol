const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Jugador = new Schema(
    {
      _id: Number,
      nombre: String,
      equipo_id: {
        type: Number,
        ref: 'Equipo'
      }
    },
    {
      collection: 'jugador',
      toJSON: { virtuals: true },
    }
  )
  
  module.exports = mongoose.model('Jugador', Jugador)