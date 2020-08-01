const express = require('express')
const app = express()

app.get('/home', (req, res) => {
  res.send({
    obj1: 'a',
    obj2: 'b',
  })
})

app.get('/user', (req, res) => {
  res.send({
    guy1: 'com',
    guy2: 'puu',
  })
})

app.get('/', (req, res) => {
  res.sendfile('./index.html')
})

app.get('/jquery', (req, res) => {
  res.sendfile('./jquery-3.5.1.min.js')
})

app.get('/main.js', (req, res) => {
  res.sendfile('./main.js')
})

// start route
app.listen(3000, () => {
  console.log('Ready')
})
