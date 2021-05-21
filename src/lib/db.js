const mongoose = require('mongoose')

const DB_USER = 'angel'
const DB_PASSWORD = 'admin123'
const DB_HOST = 'kodemia.uh8t8.mongodb.net'
const DB_NAME = 'kodemia'

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`




function connect(){
    return  mongoose.connect(url, {useNewUrlParser : true, useUnifiedTopology : true})
}



module.exports = connect
