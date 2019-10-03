const sql = require('mssql');
const dbConfig = require('../config');

module.exports = {
    writeData2Database: async cycleData => {
        let pool = await new sql.ConnectionPool(dbConfig).connect();
        try {
            let result = await pool
                .request()
                .input('machine_name', cycleData.machineName)
                .input('data', cycleData.cycleTime)
                .execute('dbo.p_DT_CycleTime_AE');
            pool.close();
            console.log(result['recordset'][0]['Result']);
            return result['recordset'][0]['Result'];
        } catch (error) {
            console.log(error);
            return error;
        }
    },
};
