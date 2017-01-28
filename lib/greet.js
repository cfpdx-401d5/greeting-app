const cowsay = require('cowsay');

const userInputs = process.argv;
// console.log('userInputs=', userInputs);
let plain = process.argv[3]


if (process.argv[2] === '--plain') {
    var name = 'stranger';
    plain = '--plain';
} else {
    var name = process.argv[2];
}

function greetCust(name, plain) {
    if (plain) {
        console.log(`hello ${name}`);
    } else {
        console.log(cowsay.say({text: `hello ${name}`}));
    }
}

greetCust(name, plain);