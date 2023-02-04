import express from 'express'
import cors from 'cors'

import db from './config/database.js'

const app = express()

const corsOptions = {
  origin: 'http://localhost:3000',
}

app.use(cors(corsOptions))

// parse requests of content-type - application/json
app.use(express.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

const usersDB = async () => await db('user').select('name', 'lastname')

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to celinor application.' })
})

// simple DB test
app.get('/test', async (req, res) => {
  let users = await usersDB()
  res.json({ message: 'Database test', users: users })
})

// set port, listen for requests
const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
