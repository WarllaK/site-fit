exports.PORT = 3000

exports.DB_PATH = './database/users.json'

exports.CHAVE_JWT = 'umasenhaqualquer_warlla_queficasonoservidor'
exports.TOKEN_EXPIRATION = '1h'

exports.message = {
    server: {
        start: {
            sucess: "Servidor iniciado com sucesso na porta: ",
            error: "Servidor iniciado com sucesso na porta: "
        },
        response_code: {
            200: { status: 200, message: "Success" },
            400: { status: 400, message: 'Faltam parâmetros' },
            401: { status: 401, message: 'Falha na autenticação' },
            404: { status: 404, message: 'informação não encontrada' },
            500: { status: 500, message: 'Erro no servidor' }
        }
    },
    cadastro: {
        email_invalid: {
            status: 406, message: "Requisição não aceita. Input invalido"
        },
        email_taked: {
            status: 200, message: "Email já está sendo usado. Tente fazer o login"
        }
    },
    login: {
        token_authorizated: { status: 200, message: 'Authorizated' }
    }
}