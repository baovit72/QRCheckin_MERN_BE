const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://baovit72:hnb2212@cluster0-tp0k7.mongodb.net/test?retryWrites=true&w=majority' ||process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/diemdanh', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db