
const express = require('express')
const app = new express()

app.use(express.static(__dirname + '/'))
app.listen(4000)