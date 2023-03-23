//requiring the imp modules
// const fs = require('node:fs');
// const path = require('node:path');
const {
    createFile,
    readFile,
    updateFile,
    deleteFile,
    createFolder,
    readFolder,
    updateFolder,
    deleteFolder,
  } = require("./operations");
const process = require("node:process");
//to take input from commandinput
let input = process.argv;
let operation = input[2];
// let fileName = input[3];
// let pathName = path.dirname(input[1]) + '/';

//display all the Operations
function print() {
  console.log('Type "node filSystem.js 1" to Read File ');
  console.log('Type "node filSystem.js 2" to Create File');
  console.log('Type "node filSystem.js 3" to Update File');
  console.log('Type "node filSystem.js 4" to Delete File');
  console.log('Type "node filSystem.js 5" to Create Folder');
  console.log('Type "node filSystem.js 6" to Delete Folder');
  console.log('Type "node filSystem.js 7" to Read Folder');
  console.log('Type "node filSystem.js 8" to Update Folder');
  console.log('Type "node filSystem.js 9" to Exit');
  console.log("\n");
}

//for Invalid Input
if (process.argv[2] === undefined) {
  print();
}
//display the Commands to perform the Operations
else {
  if (operation === "1") {
    console.log('To perform type : node filSystem.js readFile "Filename" ');
  }
  if (operation === "2") {
    console.log(
      'To perform type : node filSystem.js createFile "Foldername" "Filename" "content" '
    );
  }
  if (operation === "3") {
    console.log(
      'To perform type : node filSystem.js updateFile "Foldername" "Filename" "content to be updated in the file"'
    );
  }
  if (operation === "4") {
    console.log(
      'To perform type : node filSystem.js deleteFile "Foldername" "Filename" '
    );
  }
  if (operation === "5") {
    console.log(
      'To perform type : node filSystem.js createFolder "Foldername" "path/"'
    );
  }
  if (operation === "6") {
    console.log(
      'To perform type : node filSystem.js deleteFolder "Foldername" "path/"'
    );
  }
  if (operation === "7") {
    console.log(
      'To perform type : node filSystem.js readFolder "Foldername" "path/"'
    );
  }
  if (operation === "8") {
    console.log(
      'To perform type : node filSystem.js updateFolder "Original Foldername" "New Foldername" "path/"'
    );
  }
  if (operation === "9") {
    process.exit();
  }

  //read File
  if (operation === "readFile") {
    readFile();
  }
  //create File
  if (operation === "createFile") {
    createFile();
  }
  //delete File
  if (operation === "deleteFile") {
    deleteFile();
  }
  //update File
  if (operation === "updateFile") {
    updateFile();
  }
  //create folder
  if (operation === "createFolder") {
    createFolder();
  }
  //delete Folder
  if (operation === "deleteFolder") {
    deleteFolder();
  }
  //read Folder
  if (operation === "readFolder") {
    readFolder();
  }
  //update Folder
  if (operation === "updateFolder") {
    updateFolder();
  }
}

//next update multiline content input
