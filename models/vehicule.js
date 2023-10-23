const mongoose = require ('mongoose');
const vehicule = mongoose.model('vehicule',{
    name:{
        type: String
    },
    model:{
        type: String
    }
})

module.exports = vehicule;