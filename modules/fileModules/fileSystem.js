//requiring the imp modules
// const fs = require('node:fs');
// const path = require('node:path');
const process = require('node:process');
const {createFile, readFile, updateFile, deleteFile, createFolder, readFolder, updateFolder, deleteFolder} = require('./operations')
//to take input from commandinput
let input = process.argv;
let operation = input[2];
// let fileName = input[3];
// let pathName = path.dirname(input[1]) + '/';

//display all the Operations
function print(){
    console.log('Type "node filSystem.js 1" to Read File '); 
    console.log('Type "node filSystem.js 2" to Create File'); 
    console.log('Type "node filSystem.js 3" to Update File'); 
    console.log('Type "node filSystem.js 4" to Delete File'); 
    console.log('Type "node filSystem.js 5" to Create Folder'); 
    console.log('Type "node filSystem.js 6" to Delete Folder'); 
    console.log('Type "node filSystem.js 7" to Read Folder'); 
    console.log('Type "node filSystem.js 8" to Update Folder'); 
    console.log('Type "node filSystem.js 9" to Exit'); 
    console.log('\n'); 
}

//for Invalid Input
if (process.argv[2] === undefined) { 
    print();
   }
   //display the Commands to perform the Operations
   else { 
    if (operation === '1'){
        console.log('To perform type : node filSystem.js RF "Filename" ')}
    if (operation === '2'){
        console.log('To perform type : node filSystem.js CF "Foldername" "Filename" "content" ')}
    if (operation === '3'){
        console.log('To perform type : node filSystem.js UF "Foldername" "Filename" "content to be updated in the file"')}
    if (operation === '4'){
        console.log('To perform type : node filSystem.js DF "Foldername" "Filename" ')}
    if (operation === '5'){
        console.log('To perform type : node filSystem.js CFO "Foldername" "path/"')}
    if (operation === '6'){
        console.log('To perform type : node filSystem.js DFO "Foldername" "path/"')}
    if (operation === '7'){
        console.log('To perform type : node filSystem.js RFO "Foldername" "path/"')}
    if (operation === '8'){
        console.log('To perform type : node filSystem.js UFO "Original Foldername" "New Foldername" "path/"')}
    if (operation === '9'){
        process.exit();
    }

    //read File
    if (operation === 'RF'){
        readFile();
          
    }

    //create File
    if (operation === 'CF'){
        createFile();
        
    }

    //delete File
    if (operation === 'DF'){
        deleteFile();
        
    }

    //update File 
    if (operation === 'UF'){
        updateFile();
        
    }

    //create folder 
    if(operation === 'CFO'){
        createFolder();
        
    } 

    //delete Folder
    if(operation === 'DFO'){
        deleteFolder();
        
    }

    //read Folder
    if(operation === 'RFO'){
        readFolder();
        
    }

    //update Folder
    if(operation === 'UFO'){
    updateFolder();
    
    }

}

//next update multiline content input