const express = require('express')
const app = express()
const port = 4042

app.get('/', (req, res) => {
  res.send('Centre equestre ')
})

app.listen(port, () => {
  console.log(`Nous écoutons sur le port http://localhost:${port}`)
})