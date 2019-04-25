const mongoose = require('mongoose')
const Liga = mongoose.model('Liga')

exports.getLiga = function (req, res){
    Liga.find(function (err, liga){
        if (err) throw err 
        console.log(liga)
    })
}

exports.createLiga = function (req, res) {
    console.log(req.body);
    const liga = new Liga(req.body)
    liga.save(function (err, liga) {
        if (err) throw err 
        console.log(liga)
    })
}

exports.updateLiga = function (req, res) {
    console.log(req.body)
    console.log(req.params.liga_id)
    Liga.findOneAndUpdate({ '_id': req.params.liga_id }, req.body, { new: true },
        function (err, liga) {
            if (err) throw err 
            console.log(liga)
        })
}

exports.deleteLiga = function (req, res) {
    Liga.deleteOne({'_id' : req.params.liga_id}, function(err){
        console.log(res)
        console.log(err)
    })
}

