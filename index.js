const express = require('express')
const path = require('path')
const app = express()

app.get('*', (req, res) => {
  let file = ''
  if(req.path === '' || req.path === '/' ) {
    file = path.resolve(__dirname, 'html/index.html')
  } else {
    file = path.resolve(__dirname, 'html/' + req.path + '.html')
  }
  res.sendFile(file)
})

app.listen(3000)
