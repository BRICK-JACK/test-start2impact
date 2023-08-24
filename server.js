import express from 'express'
import cors from 'cors'
import database from './src/models/index.js'
import config from './src/config/config.js'
import studentRoutes from './src/routes/students.js'

const app = express()

var corsOptions = {
  origin: "http://localhost:8080"
}

app.use(cors(corsOptions))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

database.sequelizeConnection.authenticate()
database.sequelizeConnection.sync()

app.use('/api/v1', studentRoutes)

app.listen(config.server.port, () => {})
