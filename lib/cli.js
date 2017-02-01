const greetCust = require('./greet');
const userInputs = [];

let name = '';
let greeting = '';
let plain = '';

for (let i = 2; i < process.argv.length; i++) {
    userInputs.push(process.argv[i].split(':'));
}

userInputs.forEach(function parseInputs(input) {
    if (input[0] === '--name') {
        return name = input[1] || 'partner';
    }
    if (input[0] === '--greeting') {
        return greeting = input[1] || 'hello';
    }
    if (input[0] === '--plain') {
        return plain = input[0];
    }
})

greetCust(name, greeting, plain);