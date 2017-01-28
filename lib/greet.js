const cowsay = require('cowsay');

module.exports = function greetCust(name, plain) {
    if (plain) {
        console.log(`hello ${name}`);
    } else {
        console.log(cowsay.say({text: `hello ${name}`}));
    }
}