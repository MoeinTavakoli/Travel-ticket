require('dotenv').config()

const config = {
    databse: {
        host: process.env.HOST,
        user: process.env.DATABASE_USER,
        database: process.env.DATABASE_NAME,
        password: process.env.DATABASE_PASSWORD,
        port: process.env.SERVER_PORT,
    },
    jwt: {
        secret: process.env.JWT_SECRET
    }
}

console.log(config)

module.exports = config
