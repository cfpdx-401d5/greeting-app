const cowsay = require('cowsay');

if (process.argv[2] === '--plain') {
    var name = 'stranger';
} else {
    var name = process.argv[2];
}
const plain = process.argv[3]


function greetCust(name, plain) {
    if (plain) {
        console.log(`hello ${name}`);
    } else {
        console.log(cowsay.say({text: `hello ${name}`}));
    }
}

greetCust(name, plain);