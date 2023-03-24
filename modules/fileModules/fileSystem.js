import * as fileOperation from "./fileOperation.mjs";

let input;
let OperationNum;
let fileName;
const blank = undefined;

export const path = process.cwd();
export let file;
export let content;
print();
process.stdin.on("data", function (content) {
  input = content.toString().trim().split(" ");
  OperationNum = Number(input[0]);
  fileName = input[1];
  content = input[2];
  operationDisp();
});


function print() {
  console.log("To Exit Type: 0");
  console.log("To Create File Type: 1");
  console.log("To Read File Type: 2");
  console.log("To Update File Type: 3");
  console.log("To Delete File Type: 4");
  console.log("To Create Folder Type: 5");
  console.log("To Read Folder Type: 6");
  console.log("To Update Folder Type: 7 ");
  console.log("To Delete Folder Type: 8 ");
}
function operationDisp() {
  if (OperationNum === 0) {
    console.log("File System Ended");
    process.exit();
  } else if (OperationNum === 1) {
    
    if (fileName === blank) {
      console.log("To Create file type 1 then file name then the content");
    }
    // console.log(OperationNum);
  } else if (OperationNum === 2) {
    
    if (fileName === blank) {
      console.log("To read file type 2 then file name");
    }
  } else if (OperationNum === 3) {
    
    console.log("To update file file type 3 then file name then the new content");
  } else if (OperationNum === 4) {
    
    if (fileName === blank) {
      console.log("To delete file type 4 then file name");
    }
  } else if (OperationNum === 5) {
    
    if (fileName === blank) {
      console.log("To Create folder type 5 then folder name");
    }
  } else if (OperationNum === 6) {
    
    if (fileName === blank) {
      console.log("To Read folder type 6 then folder name");
    }
  } else if (OperationNum === 7) {
    
    if (fileName === blank) {
      console.log("To Update folder type 7 then folder name then the new name");
    }
  } else if (OperationNum === 8) {
    
    if (fileName === blank) {
      console.log("To Delete folder type 8 then folder name");
    }
  } else {
    console.log("Invalid Input");
  }
  dataOperation();
}

function dataOperation() {
    if (fileName !== blank && OperationNum === 1) {
    file = fileName;
    content = input[2];
    fileOperation.fileCreate();
  } else if (fileName !== blank && OperationNum === 2) {
    file = fileName;
    fileOperation.fileRead();
  } else if (fileName !== blank && OperationNum === 3) {
    file = fileName;
    content = input[2];
    fileOperation.fileUpdate();
  } else if (fileName !== blank && OperationNum === 4) {
    file = fileName;
    fileOperation.fileDelete();
  } else if (fileName !== blank && OperationNum === 5) {
    file = fileName;
    fileOperation.folderCreate();
  } else if (fileName !== blank && OperationNum === 6) {
    file = fileName;
    fileOperation.folderRead();
  } else if (fileName !== blank && OperationNum === 7) {
    file = fileName;
    content = input[2];
    fileOperation.folderUpdate();
  } else if (fileName !== blank && OperationNum === 8) {
    file = fileName;
    fileOperation.folderDelete();
  }
}


