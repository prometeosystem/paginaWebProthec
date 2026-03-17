import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mysql from 'mysql2/promise'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    process.env.FRONTEND_URL
  ].filter(Boolean)
}))
app.use(express.json())

function getPool() {
  return mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  })
}

app.post('/api/leads', async (req, res) => {
  const { nombre, email, telefono } = req.body ?? {}

  if (!nombre || typeof nombre !== 'string' || nombre.trim().length === 0) {
    return res.status(400).json({ error: 'El nombre es obligatorio.' })
  }
  if (!email || typeof email !== 'string' || email.trim().length === 0) {
    return res.status(400).json({ error: 'El correo es obligatorio.' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email.trim())) {
    return res.status(400).json({ error: 'Correo electrónico no válido.' })
  }

  const pool = getPool()
  try {
    await pool.execute(
      'INSERT INTO leads (nombre, email, telefono) VALUES (?, ?, ?)',
      [nombre.trim(), email.trim(), telefono ? String(telefono).trim() : null]
    )
    return res.status(201).json({ ok: true, message: 'Lead registrado correctamente.' })
  } catch (err) {
    console.error('Error al guardar lead:', err)
    return res.status(500).json({ error: 'Error al guardar. Intenta de nuevo más tarde.' })
  } finally {
    await pool.end()
  }
})

app.listen(PORT, () => {
  console.log(`API escuchando en http://localhost:${PORT}`)
})
