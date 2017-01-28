
const greetCust = require('./greet');
const userInputs = process.argv;
let plain = process.argv[3]

if (process.argv[2] === '--plain') {
    var name = process.argv[3] || 'stranger';
    plain = '--plain';
} else if (!process.argv[2] && !process.argv[3]) {
    var name = 'stranger';  
} else {
    var name = process.argv[2];
}

greetCust(name, plain);