//requiring the imp modules
const fs = require("node:fs");
const path = require("node:path");
const process = require("node:process");

//to take input from commandinput
let input = process.argv;
// let operation = input[2];
let fileName = input[3];
let pathName = path.dirname(input[1]) + "/";

const readFile = () => {
  try {
    const data = fs.readFileSync(fileName, "utf8");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

const createFile = () => {
  fs.writeFileSync(
    pathName + fileName + "/" + input[4],
    input[5],
    console.log("File is created successfully!")
  );
};

const deleteFile = () => {
  fs.unlinkSync(pathName + fileName + "/" + input[4]);
  console.log("File deleted successfully!");
};

const updateFile = () => {
  fs.writeFileSync(
    pathName + fileName + "/" + input[4],
    input[5],
    console.log("File is updated successfully!")
  );
};

const createFolder = () => {
  if (!fs.existsSync(pathName + input[4] + fileName)) {
    fs.mkdirSync(pathName + input[4] + fileName);
  }
  console.log("Folder is created successfully!");
};

const deleteFolder = () => {
  fs.rmdir(pathName + input[4] + fileName, (err) => {
    if (err) {
      throw err;
    }
    console.log(`Folder ${fileName} is deleted successfully!`);
  });
};

const readFolder = () => {
  console.log("\n The " + fileName + " directory consists : ");
  console.log(fs.readdirSync(pathName + input[4] + fileName));
};

const updateFolder = () => {
  fs.rename(
    pathName + input[5] + fileName,
    pathName + input[5] + input[4],
    (err) => {
      if (err) {
        console.error(err);
      }
      console.log("Folder name is updated successfully!");
    }
  );
};
module.exports = {
  createFile,
  readFile,
  updateFile,
  deleteFile,
  createFolder,
  readFolder,
  updateFolder,
  deleteFolder,
};
