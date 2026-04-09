const express = require('express')
const app = express()

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.status(500).send('erro')
})

app.get('/version', (req, res) => {
  res.send('2')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`) // eslint-disable-line no-console
})

