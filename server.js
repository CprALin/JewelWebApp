const sql= require('mssql');
const dotenv = require('dotenv');

dotenv.config({ path : './config.env'});

const sqlConfig = {
    user : process.env.DB_USER,
    password : process.env.DB_PWD,
    database : process.env.DB_NAME,
    server : 'localhost',
    pool : {
        max : 10,
        min : 0,
        idleTimeoutMillis : 30000
    },
    options : {
        encrypt : true,
        trustServerCertificate : true
    }
}

process.on('uncaughtException' , err => {
    console.log('UNCAUGHT EXCEPTION | Shutting down ...');
    console.log(err.name , err.message);
    process.exit(1);
});

const app = require('./app');

(async () => {
    try{
        await sql.connect(sqlConfig);
        console.log('DB connection successful !');
    }catch(err){
        console.error('DB connection error :' , err);
        process.exit(1);
    }
})();

const port = process.env.PORT || 3000;

const server = app.listen(port , () => {
    console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', err => {
    console.log('UNHANDLER REJECTION ! - Shutting down...');
    console.log(err.name , err.message);
    server.close(() => {
      process.exit(1);  
    });
});