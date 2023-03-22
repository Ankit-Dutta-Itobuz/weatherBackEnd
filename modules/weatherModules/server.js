const http = require("http");
const fs = require("fs");
const path = require("path");
const port = 2000;


function getData() {
    try{
        // let dataPath = path.resolve("storeData.txt");
        // let dataPath = new URL("storeData.txt", import.meta.url);//es6
        let dataPath = path.join(__dirname,'storeData.txt');
        console.log(dataPath);
        const data = fs.readFileSync(dataPath, "utf-8");
        console.log(data);
        const arr = JSON.parse(data);
        console.log(arr);
        return arr;
    }
    catch(err){
        console.log(err);
    }
}

const data = getData();

function getRouteData(route){
    let status = 200;
    let locData = {};
    let loc = route.split("/")[1];
    console.log(loc);
    for(let i = 0; i<data.length; i++){
        if(data[i].location === loc) {
            locData = data[i];
        }
    }
    return JSON.stringify({
        status,
        route,
        location : loc,
        data : locData,
    });
}

const server = http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end(getRequestData(req));
    console.log(req.url);
});

server.listen(port,  ()=>{
    console.log(`server listening at port ${port}`);
});

function getRequestData(req) {
    if (req.url === "/") {
        return JSON.stringify(data);
    }
    else {
        return getRouteData(req.url);
    }
}


