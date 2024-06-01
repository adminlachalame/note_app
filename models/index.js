const sequelize = require("../config/database");
const Note = require("./note");

const syncDB = async() =>{
    try{
        await sequelize.sync();
        console.log("Databse Synced!");
    }catch(err){
        console.error('error syncing database',err);
    }
};
module.exports = {syncDB, Note};