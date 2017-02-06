
const greet = require('./lib/greet.js');

var input = process.argv.splice(2);

var name = 'stranger';
var greeting = 'hello';
var plain;

for (var i = 0; i < input.length; i++) {
    if (input[i].includes('--name:')) {
        name = input[i].split(':')[1];
    }
    if (input[i].includes('--greeting:')) {
        greeting = input[i].split(':')[1];
    }
    if (input[i].includes('--plain')) {
        plain = true;
    }
}

const display = greet(name, greeting, plain);

process.stdout.write(display + '\n');