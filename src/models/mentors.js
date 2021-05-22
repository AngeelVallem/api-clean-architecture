const mongoose = require('mongoose')

const mentorsSchema = new mongoose.Schema({
    name : {
        type : String,
        minLength : 2,
        maxLenght : 100,
        required : true
     },
     lastName : {
        type : String,
        minLength : 2,
        maxLenght : 100,
        required : true
     },
     age : {
         type : Number,
         min : 0,
         max : 150,
         required: true,
     },
     gender : {
        type : String,
        emun : ['m','f'],
        required : true
     },
    modules : {
        type: String,
        enum : ['maquetado', 'BackEnd', 'React', 'javascript'],
        require : true
    }
})

const model = mongoose.model('mentors', mentorsSchema)




module.exports = model
