require('dotenv').config()

const config = {
    databse: {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        database: process.env.DATABASE_NAME,
        password: process.env.DATABASE_PASSWORD,
        port: process.env.DATABASE_PORT,
    },
    jwt: {
        secret: process.env.JWT_SECRET
    }
}


module.exports = config
