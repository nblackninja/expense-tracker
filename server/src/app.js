const express = require('express')
const compression = require('compression')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const corsOptions = require('./modules/config/cors')
const morgan = require('morgan')
const serveStatic = require('serve-static')
const path = require('path')

const app = express().disable('x-powered-by')

app.use(compression())
app.use(express.json({ extended: true }))
app.use(cookieParser())

app.use(cors(corsOptions))

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

if (process.env.NODE_ENV === 'production') {
  const pathStatic = path.join(__dirname, 'client', 'build')
  const index = 'index.html'
  app.use('/', serveStatic(pathStatic, { index }))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', index))
  })
}

module.exports = app
