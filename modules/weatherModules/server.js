const http = require("http");
const fs = require("fs");
const path = require("path");
const port = 2000;


function getData() {
    try{
        // let dataPath = new URL("storeData.txt", import.meta.url);//es6
        let directory = path.join(__dirname,'storeData.txt');
        console.log(directory);
        const data = fs.readFileSync(directory, "utf-8");
        console.log(data);
        const array = JSON.parse(data);
        console.log(array);
        return array;
    }
    catch(err){
        console.log(err);
    }
}

const data = getData();

function getRouteData(route){
    let status = 200;
    let locationData = {};
    let loc = route.split("/")[1];
    console.log(loc);
    for(let i = 0; i<data.length; i++){
        if(data[i].location === loc) {
            locationData = data[i];
        }
    }
    return JSON.stringify({
        status,
        route,
        location : loc,
        data : locationData,
    });
}

const server = http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end(getReqData(req));
    console.log(req.url);
});

server.listen(port,  () => {
    console.log(`server listening at port ${port}`);
});

function getReqData(req) {
    if (req.url === "/") {
        return JSON.stringify(data);
    }
    else {
        return getRouteData(req.url);
    }
}


