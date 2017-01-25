"use strict";

//get the greeting 
var greeting = require("./lib/greet.js").greeting;

// hold on to this code to output
//var whatToSay = greeting(process.argv);
console.log(greeting(process.argv))
    //process.stdout.write(`${whatToSay}`);