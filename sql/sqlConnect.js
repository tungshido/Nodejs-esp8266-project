'use strict';
const sql = require('mssql');
const dbConfig = {
    user: 'MP',
    password: 'Mp@160819',
    server: 'SWVNMP22',
    database: 'IoTdata',
    options: {
        trustedConnection: true,
    },
};

module.exports = {
    writeData2Database: async cycleData => {
        try {
            sql.close();
            let pool = await sql.connect(dbConfig);
            let result = await pool
                .request()
                .input('machine_name', cycleData.machineName)
                .input('data', cycleData.cycleTime)
                .execute('dbo.p_DT_CycleTime_AE');
            sql.close();
            console.log(result['recordset'][0]['Result']);
            return result['recordset'][0]['Result'];
        } catch (error) {
            console.log(error);
            sql.close();
            return error;
        }
    },
};
