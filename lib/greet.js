"use strict"; // is this right?
// get external files
var cowsay = require("cowsay");

//first see if we got a name
var nameIs = function(argv) {
    var name = "stranger"; // don't let this be undefined
    if (argv[2] && !(isFlag(argv[2]))) {
        name = argv[2];
    }
    if (argv[3] && !(isFlag(argv[3]))) {
        name = argv[3];
    };
    return name;
};

//now see if we have a flag
var isFlag = function(arg) {
    if (arg === "--plain")
        return true;
}

var csWhat = "hello " + nameIs(process.argv);

if (isFlag(process.argv[2]) || isFlag(process.argv[3])) {
    process.stdout.write(csWhat);
} else {
    process.stdout.write(cowsay.say({ text: csWhat }));
};