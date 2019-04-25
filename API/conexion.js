const mongoose = require('mongoose')

mongoose.Promise = global.Promise

require('./ligaModelo')
require('./equipoModelo')
require('./jugadorModelo')

exports.db = mongoose.connect('mongodb://localhost:27017/futbol', {useMongoClient: true}).then(() => {
    console.log('La conexión a MongoDB se ha realizado correctamente!!')
}).catch(err => console.log(err))