const express = require('express')
const storage = require('node-persist')
const cookieParser = require('cookie-parser')
storage.init()

const app = express()
app.use(express.json()) //JSON parser
app.use(cookieParser()) //load cookie parser for reading cookies

app.use('/api/auth',require('./auth-routes'))

app.listen(5000,()=>console.log("server started"))