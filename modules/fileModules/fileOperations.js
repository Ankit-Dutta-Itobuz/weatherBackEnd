import { rejects } from "assert";
import * as fs from "fs";
import { resolve } from "path";
import * as fileSystem from "./fileSystem.mjs";

let directory;
let data;

export const fileCreate = async () => {
  directory = `./${fileSystem.file}`;
  data = `${fileSystem.content}`;
  try {
    await fs.writeFile(directory, data, (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log("File Created");
    });
  } catch (err) {
    console.log(err);
  }
};

export const fileRead = async () => {
  directory = `./${fileSystem.file}`;
  return new Promise((resolve, reject) => {
    resolve = fs.readFile(directory, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(data);
    });
  });
};

export const fileUpdate = async () => {
  directory = `./${fileSystem.file}`;
  data = `${fileSystem.content}`;
  try {
    await fs.writeFile(directory, data, (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log("File Updaated");
    });
  } catch (err) {
    console.log(err);
  }
};

export const fileDelete = async () => {
  directory = `./${fileSystem.file}`;
  return new Promise((resolve, reject) => {
    resolve = fs.unlink(directory, (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("File Deleted Successfully");
    });
  });
};

export const folderCreate = async () => {
  return new Promise((resolve, reject) => {
    directory = `./${fileSystem.file}`;
    if (!fs.existsSync(directory)) {
      resolve = fs.mkdir(directory, (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Folder Created");
      });
    }
  });
};

export const folderDelete = async () => {
    return new Promise((resolve, reject) => {
        directory = `./${fileSystem.file}`;
          resolve = fs.rmdir(directory, (err, data) => {
            if (err) {
              console.log(err);
              return;
            }
            console.log("Folder Deleted");
          });
        
      });
  };

  //Read & Update under progress