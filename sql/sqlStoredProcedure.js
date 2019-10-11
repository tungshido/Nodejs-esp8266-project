const { poolPromise } = require('./createPoolConnection');
module.exports = {
  writeData2Database: async cycleData => {
    try {
      const pool = await poolPromise;
      let result = await pool
        .request()
        .input('machine_name', cycleData.machineName)
        .input('data', cycleData.cycleTime)
        .execute('dbo.p_DT_CycleTime_AE');
      return result['recordset'][0]['Result'];
    } catch (error) {
      console.log(error);
    }
  },
};
