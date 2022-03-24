const fs = require('fs');
const { DB_PATH, message, CHAVE_JWT, TOKEN_EXPIRATION } = require('../../config');
const { printResult } = require('../global');
const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
    const users = JSON.parse(fs.readFileSync(DB_PATH, { encoding: 'utf-8' }))
    const dados = req.query

    const verifytoken = () => {
        try {
            var decoded = jwt.verify(dados.token, CHAVE_JWT);
            return { tokened: decoded }
        } catch (error) {
            return false;
        }
    }

    const verifyIsRegistred = () => {
        if (dados.token) return verifytoken()

        if (!dados.email || !dados.senha) return message.server.response_code[400]

        if (users.length === 0) return false

        const isInDataBase = users.find(user => user.email === dados.email && user.senha === dados.senha)
        if (isInDataBase) return isInDataBase;

        return false;
    }

    const isRegistred = verifyIsRegistred()

    if (!isRegistred) return printResult(res, message.server.response_code[401])

    if (isRegistred.tokened) return printResult(res, message.login.token_authorizated)

    const token = jwt.sign(
        {
            usuario: isRegistred.usuario,
            email: isRegistred.email
        },
        CHAVE_JWT,
        { expiresIn: TOKEN_EXPIRATION }
    );

    printResult(res, { status: 200, message: 'Logado com sucesso', token })
}