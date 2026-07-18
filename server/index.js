import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
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

// Máximo 5 envíos por IP cada 15 minutos: suficiente para humanos, frena bots
const leadsLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Demasiados intentos. Espera unos minutos e intenta de nuevo.' }
})

// Pool único compartido por todas las peticiones
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

async function ensureLeadsTable() {
  await pool.execute(`
    CREATE TABLE IF NOT EXISTS leads (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nombre VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      telefono VARCHAR(50) DEFAULT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)
}

app.post('/api/leads', leadsLimiter, async (req, res) => {
  const { nombre, email, telefono, website } = req.body ?? {}

  // Honeypot: el campo "website" está oculto en el formulario; si llega lleno, es un bot.
  // Respondemos 201 para no darle pistas.
  if (website) {
    return res.status(201).json({ ok: true, message: 'Lead registrado correctamente.' })
  }

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

  try {
    await pool.execute(
      'INSERT INTO leads (nombre, email, telefono) VALUES (?, ?, ?)',
      [nombre.trim(), email.trim(), telefono ? String(telefono).trim() : null]
    )
    return res.status(201).json({ ok: true, message: 'Lead registrado correctamente.' })
  } catch (err) {
    console.error('Error al guardar lead:', err)
    return res.status(500).json({ error: 'Error al guardar. Intenta de nuevo más tarde.' })
  }
})

;(async () => {
  await ensureLeadsTable()
  app.listen(PORT, () => {
    console.log(`API escuchando en http://localhost:${PORT}`)
  })
})()
