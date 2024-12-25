const sql = require('mssql');

const executeStoredProcedure = async (procedureName , inputParams = {} , outputParams = {}) => {
    try{
        const request = new sql.Request();

        for(const [key , value] of Object.entries(inputParams))
        {
            request.input(key, value.type , value.value);
        }

        for(const [key , type] of Object.entries(outputParams))
        {
            request.output(key , type);
        }

        const result = await request.execute(procedureName);
        return result;
    }catch(error){
        console.error('Error executing stored procedure : ' , error);
        throw error;
    }
};

const insertStoredProcedure = async (procedureName , inputParams = {}) => {
    try{
        const request = new sql.Request();

        for(const [key , value] of Object.entries(inputParams))
        {
            request.input(key, value.type , value.value);
        }

        const result = await request.execute(procedureName);
        return result;
    }catch(error){
        console.error('Error executing stored procedure : ' , error);
        throw error;
    }
};

const executeOutStoredProcedure = async (procedureName , outputParams = {}) => {
    try{
        const request = new sql.Request();

        for(const [key , type] of Object.entries(outputParams))
        {
            request.output(key , type);
        }

        const result = await request.execute(procedureName);
        return result;
    }catch(error){
        console.error('Error executing stored procedure : ' , error);
        throw error;
    }
};


const readStoredProcedure = async (procedureName) => {
    try{
        const request = new sql.Request();
        
        const result = await request.execute(procedureName);
        return result;
    }catch{
        console.error('Error executing stored procedure : ' , error);
        throw error;
    }
}

module.exports = {executeStoredProcedure , readStoredProcedure , executeOutStoredProcedure , insertStoredProcedure};