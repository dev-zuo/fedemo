
const express = require('express')
const app = new express()
const proxy = require('http-proxy-middleware')

app.use(express.static(__dirname + '/'))
app.use('/api', proxy({
  target: 'http://127.0.0.1:3000',
  changeOrigin: true
}))

app.listen(4000)