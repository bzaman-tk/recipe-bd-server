const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000
app.use(cors())

app.get('/', (req, res) => {
    res.send('<h1>Server Is Working Fine</h1>')
})

app.listen(port, () => console.log('My port is: ', port))