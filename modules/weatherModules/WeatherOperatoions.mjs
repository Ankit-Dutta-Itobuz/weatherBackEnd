import { weatherData } from "./weatherDb.mjs";
import * as fs from 'node:fs';
//import * as path from 'path';

// Absolute Path
const filePath = new URL('storeData.txt', import.meta.url);


function createData(cityName, tempValue){
    weatherData.push({
        location:cityName,
        temp:tempValue
    });
    // const data = JSON.stringify(weatherData);
    fs.writeFileSync(filePath,JSON.stringify(weatherData));
    console.log("....Created");
   
}

function updateData(cityName, newTemp){
    for(let i=0; i<weatherData.length; i++)
    {
        if(weatherData[i].location==cityName){
            weatherData[i].location=cityName;
            weatherData[i].temp=newTemp;
        }
    }
}

function deleteData(cityName){
    for(let i=0; i<weatherData.length; i++)
    {
        if(weatherData[i].location==cityName)
        {
            weatherData.splice(i,1);
        }
    }
    // fs.writeFile(filePath,JSON.stringify(weatherData),(err)=>{
    //     console.log("...Deleted Successfully");
    //    })
    
}
// Simple Get Function
// function getData(cityName){
//     for(let i=0; i<weatherData.length; i++)
//     {
//         if(weatherData[i].location==cityName)
//         {
//             console.log(weatherData[i]);
//         }
//     }
// }

// Get function using FS
function getData(){
    fs.readFile(filePath,"UTF-8",(err,data)=>{
        console.log(data);
    })
}

// CRUD using FS
// function crudAppend (){
//     fs.appendFile('./storeData.txt',"data added", (error)=>{
//         if(error){
//             console.log(error);
//         }
//         else {
//             console.log("\n File Contents:");
//             fs.readFileSync("storeData.txt", "utf8");
//         }
//     })
// }


// CRUD using FS 2.0
// const content = '1234';

// function crudAppend(){
//     fs.appendFile('./storeData.txt', content, err => {
//         if (err) {
//           console.error(err);
//         }
//         else {
//           console.log(`data added : ${content}`);
//         }
//       });
// }



// function crudRead() {
//     fs.readFile('./storeData.txt', 'utf8', (err, data) => {
//         if (err) {
//           console.error(err);
//           return;
//         }
//         console.log(data);
//       });
// }


// createData
// createData("Kolkata",34);
// createData("London",12);
// createData("Oslo",4);
createData("Kolkata",26);
// deleteData
//  deleteData("Kolkata");
//  deleteData("London");
//  deleteData("Oslo");
// updateData("Delhi", 10);
// console.log(weatherData);
getData();
// crudAppend();
// crudRead();

export { getData, deleteData, updateData, createData }



