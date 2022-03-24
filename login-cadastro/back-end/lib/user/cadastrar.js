const fs = require('fs');
const { DB_PATH, message } = require('../../config');
const { printResult, validateEmail } = require('../global');

exports.cadastrar = (req, res) => {
    const users = JSON.parse(fs.readFileSync(DB_PATH, { encoding: 'utf-8' }))
    const dados = req.query

    const verifyIsRegistred = () => {
        if (!dados.usuario || !dados.email || !dados.senha) return message.server.response_code[400]

        var isValidEmail = validateEmail(dados.email)

        if (!isValidEmail) return message.cadastro.email_invalid

        if (users.length === 0) return false

        const isInDataBase = users.find(user => user.email === dados.email)
        if (isInDataBase) return message.cadastro.email_taked;

        return false;
    }

    const isRegistred = verifyIsRegistred()

    if (isRegistred) return printResult(res, isRegistred)

    users.push(dados)

    fs.writeFileSync(DB_PATH, JSON.stringify(users, null, 4))

    printResult(res, message.server.response_code[200])
};
