import express from 'express'
import path from 'path'
import fs from 'fs'

const app = express()

app.get('*', (req, res) => {
  const path = req.path
  let file = ''
  if(path === '' || path === '/' ) {
    file = path.resolve(__dirname, 'html/index.html')
  } else {
    file = path.resolve(__dirname, 'html/' + req.path + '.html')
  }
  res.sendFile(file)
})

app.listen(3000)
