import { log } from "node:console";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import fileWrite from "./libs/write.js";
import inquirer from "inquirer";
import { cardGen } from "./libs/cardGen.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const stuInfo = [];
 
(async () => {

    let allCard = '';

    do {
        const data = await inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Name: ",
            },
            {
                type: "number",
                message: "Age: ",
                name: "age",
            },
            {
                type: "list",
                message: "Student Classes: ",
                choices: ["Class 1", "Class 2", "Class 3"],
                name: "clas",
            },
            {
                type: "checkbox",
                message: "Student Subject: ",
                choices: ["Java", "Python", "C++"],
                name: "subject",
            },
            {
                type: "confirm",
                message: "Have More Student?",
                name: "check",
            },
        ]);

       // log(data);
        const { check, ...infor } = data;
        stuInfo.push(infor);
        if(!check){
            break;
        }
        

    } while (true);


    stuInfo.forEach(({name, age, clas, subject})=>{
        allCard += cardGen(name,age,clas,subject);
    })

    log(allCard);
    const htmlContent = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Info</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main class="main">
        ${allCard}
    </main>
</div>
</body>
</html>
    `
    fileWrite('index.html', htmlContent);

})();


