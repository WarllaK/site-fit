const { message } = require('../config')
const { cadastrar, login } = require('./user')

exports.routes = (app) => {
    app.get('/', (req, res) => res.json(message.server.response_code[400]))
    app.get('/register', (req, res) => cadastrar(req, res))
    app.get('/login', (req, res) => login(req, res))
}