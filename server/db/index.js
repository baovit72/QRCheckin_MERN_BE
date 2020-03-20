const mongoose = require('mongoose')

mongoose
    .connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/diemdanh', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db