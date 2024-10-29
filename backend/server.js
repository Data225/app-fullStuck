
const express = require('express')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()
const port = 3000


//connexion a la DB
connectDB()

const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))



app.use("/post", require('./routes/post.router'))


//Lancer le server
app.listen(port, ()=>console.log('Le serveur a demaré a port '+ port))