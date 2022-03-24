const express = require('express')
const { PORT, message } = require('../config')
const { routes } = require('./routes')

exports.aplicationAPI = () => {
    const app = express()

    routes(app)

    app.listen(PORT, (error) => {
        if (!error) console.log(message.server.start.sucess + PORT)
        else console.log(message.server.start.error, error);
    })
}