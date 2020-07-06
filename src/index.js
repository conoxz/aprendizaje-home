
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()

const session = require('express-session')
mongoose.connect('mongodb://localhost/aprendizaje')



.then(db => console.log("DB is conected"))
.catch(err => console.error(err))

//Settings
app.set('port',process.env.PORT || 3000)

//Middlewares
app.use(morgan('dev'))
app.use(express.json())

//Routes //Static files

app.use(express.static(__dirname+'/public'))
app.use(require('./routes/task'))

//Server is listenig
app.listen(app.get('port'), () =>{
    console.log('Server on port ',app.get('port'))
})