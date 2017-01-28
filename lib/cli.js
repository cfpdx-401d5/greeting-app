
const greetCust = require('greet');
const userInputs = process.argv;
let plain = process.argv[3]

if (process.argv[2] === '--plain') {
    var name = 'stranger';
    plain = '--plain';
} else {
    var name = process.argv[2];
}

greetCust(name, plain);