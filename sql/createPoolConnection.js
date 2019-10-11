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

const poolPromise = new sql.ConnectionPool(dbConfig)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL');
    return pool;
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err));

module.exports = {
  sql,
  poolPromise,
};
