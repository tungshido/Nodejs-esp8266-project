'use strict';
const sql = require('mssql');
const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    server: process.env.SWVNMP22,
    database: process.env.DB_DB,
    options: {
        trustedConnection: true,
    },
};
module.exports = {
    connect2SQLServer: async () => {
        const pool = new sql.ConnectionPool(dbConfig);
        if (await pool.connect()) {
            console.log('database connected!!!');
        }
    },
    writeData2Database: async () => {
        const pool = new sql.ConnectionPool(dbConfig);
        try {
            await pool.connect();
            const request = new sql.Request(pool);
            //const query = "dbo.uspFindProducts 10";
            const select = 'SELECT * FROM IMmachine';
            const result = await request.query(select);
            return result.recordset;
            /*request.input('IdInut', ' sql.Decimal', '15');
            request.execute('dbo.uspFindProducts', (err, result) => {
                if (err) {
                    console.log(err);
                    console.log("Connection failed");
                } else {
                    console.log(result.recordset);
                    console.log("Đã kết nối vào database");
                    res.render("vibration-data");
                    pool.close();
                }
            });*/
        } catch (error) {
            console.log(error);
            return error;
        } finally {
            pool.close();
        }
    },
};
/*async function writeData2Database() {
    try {
        const request = new sql.Request(pool);
        //const query = "INSERT INTO machine (Id, machineName) VALUES ('" + data.message + "', '" + data.message + "')";
        //const select = "dbo.uspFindProducts 10";
        //const select = "SELECT * FROM IMmachine";
        //const result = await request.query(select);
        request.input('IdInput', sql.Decimal, '15');
        request.execute('dbo.uspFindProducts', (err, result) => {
            if (err) {
                console.log(err);
                console.log("Connection failed");
            } else {
                console.log(result.recordset);
                console.log("Đã kết nối vào database");
                res.render("vibration-data");
                await pool.close();
            }
        });
    } catch (error) {
        console.log(error);
        console.log("kết nối vào database không thành công");
        return error;
    } finally {
        console.log("Đã ngắt kết nối!!!");

    }
}
*/
