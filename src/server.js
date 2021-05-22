//Este archivo aloja la definicion de nuestro servidor
const express = require('express')
const kodersRouter = require('./routers/koders') 
const mentorsRouter = require('./routers/mentors')
const reqLogs = require('./middlewares/reqLogs')
const  app = express()



app.use(express.json())
app.use(reqLogs)
app.use('/koders',kodersRouter)
app.use('/mentors',mentorsRouter)

module.exports = app
