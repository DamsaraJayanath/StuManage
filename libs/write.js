import { writeFile } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "node:url";
import { log } from "console";
import { elementAt } from "rxjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileWrite = (path, data) => {
    writeFile(join(__dirname, `../${path}`), data ,'utf-8', (err) => {
        if(!err){
            log("File Updated..")
        }else{
            log(err);
        }
    })
}

export default fileWrite;