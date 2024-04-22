import { ServerRequest } from "./request_to_the_server.js";
import { connectionData } from "./database/database.js";


const urlData = "https://apidata.mos.ru/v1/datasets/60788/rows?api_key=553083a7-1c08-4000-a53c-9ab2318390e7";
const serverRequest = new ServerRequest(urlData);


serverRequest.fethData()
    .then(data => {
    
        data.forEach(element => {
            const sql = `INSERT INTO library_points(LibraryName, AdmArea, District, Address, AccessFlag ) VALUES
            ("${element.Cells.LibraryName}", "${element.Cells.AdmArea}", "${element.Cells.District}", "${element.Cells.Address}", "${element.Cells.AccessFlag}")`;
            connectionData.query(sql, (err, result) => {
                if(err){
                    throw err
                }
                else{
                    console.log("OK!")
                }
            })
        });
        connectionData.end()
    });
