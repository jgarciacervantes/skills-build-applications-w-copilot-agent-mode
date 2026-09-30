import express from 'express'
import mongoose from 'mongoose'
import db from './config/database.js'

const app = express()
const port = Number(process.env.PORT ?? 8000)
const codespaceName = process.env.CODESPACE_NAME
const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000'
const User = mongoose.model(
  'User',
  new mongoose.Schema({}, { collection: 'users', strict: false }),
)
const Activity = mongoose.model(
  'Activity',
  new mongoose.Schema({}, { collection: 'activities', strict: false }),
)

app.use(express.json())

app.get('/api/users', async (_request, response) => {
  response.json(await User.find().lean().exec())
})

app.get('/api/activities', async (_request, response) => {
  response.json(await Activity.find().lean().exec())
})

app.get('/api/health', (_request, response) => {
  const connected = db.readyState === 1
  response.status(connected ? 200 : 503).json({
    status: connected ? 'ok' : 'unavailable',
    database: connected ? 'connected' : 'disconnected',
  })
})

app.listen(port, '0.0.0.0', () => {
  console.log(`OctoFit API listening on port ${port} (${apiBaseUrl})`)
})