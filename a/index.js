console.log("welcome to package a at ",__dirname);

var b = require("b");
if(b.express == require("express")){
    console.log("SUCCESS! both modules use the same version of react")
)else{
    console.log("FAILURE! both modules use a different version of react")
}
