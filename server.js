const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello EF!')
})

app.get('/hats', (req, res) => {
    res.send('lots of hats!!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})