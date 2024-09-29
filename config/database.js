const mongoose = require('mongoose')

class Database {
    constructor() {
        this.connectDB()
    }

    async connectDB() {
        await mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log('MongoDB is connected')
        })
        .catch((err) => {
            console.log('There was a problem connecting to the database.')
            console.log(err)
        })
    }
}

module.exports = new Database()