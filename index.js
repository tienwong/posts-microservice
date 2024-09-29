const app = require('./app')
require('dotenv').config()

require('./config/database')

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})