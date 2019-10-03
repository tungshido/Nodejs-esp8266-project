const dotenv = require('dotenv').config();
dotenv.config();
const { SQL_USER, SQL_PASSWORD, SQL_DATABASE, SQL_SERVER } = process.env;
module.exports = {
    sql: {
        server: SQL_SERVER,
        database: SQL_DATABASE,
        user: SQL_USER,
        password: SQL_PASSWORD,
    },
};
