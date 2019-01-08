
const { Pool } = require('pg')

const pool = new Pool({
  user: process.env.PGUser,
  host: process.env.PGHost,
  database: process.env.PGDatabase,
  password: process.env.PGPassword,
  port:  process.env.PGPort,
  evictionRunIntervalMillis:1,
  idleTimeoutMillis: 1000
})

pool.on('error',(err)=>{
  console.error('Error in pg. ->', err.stack)
})

module.exports = pool;