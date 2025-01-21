const express = require('express')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()

//connection à la db

connectDB()



const app = express()
const port  = 5000




//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use('/post', require('./routes/post.routes'))

//demarer le serveur
app.listen(port, ()=>console.log('le serveur a demaré sur le port ' + port))