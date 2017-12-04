const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const bodyParser = require('body-parser')

// Body Parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Public Folder
app.use(express.static('public'))

// React Route
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

const port = process.env.PORT || 3000
app.listen(port, console.log(`Express en puerto: ${port}`))