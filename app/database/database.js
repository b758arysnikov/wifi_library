import mysql from 'mysql2';

class DataAccessObject{
    constructor(host, user, password, database){
        this.host = host;
        this.user = user;
        this.password = password;
        this.database = database;
    }
    
}

const conn = new DataAccessObject("localhost", "root", "Y69bs2xkxk", "wifi_library");

export const connectionData = mysql.createConnection(conn)
    
connectionData.connect(err => {
    if(err){
        console.log(err)
    }
    else{
        console.log("Ok!")
    }
});



    
