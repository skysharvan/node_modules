// let fs = require("fs");
let request = require("request");
console.log("dkfjnj")
let link = "https://www.espncricinfo.com/series/icc-women-s-championship-2017-18-2021-1122932";
request(link , cb);

function cb(error , response , html){
    console.log(html)
}