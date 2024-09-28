const express = require('express')
const PORT = 3000

const app = express()

app.get('/', (req, res) => {
    res.send('Hello from GET / route!')
})

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})