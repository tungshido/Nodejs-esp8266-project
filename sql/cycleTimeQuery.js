const { poolPromise } = require('./createPoolConnection');
module.exports = {
  dataQuery: async () => {
    try {
      const pool = await poolPromise;
      let result = await pool.query(`SELECT TOP (3000) [ID]
      ,[CreationTime]
      ,[Machine]
      ,[Data]
  FROM [IoTdata].[dbo].[DT_CycleTime]`);
      console.log(result['recordsets'][0][0]['Data']);
      return result['recordsets'][0][0];
    } catch (error) {
      console.log(error);
    }
  },
};
