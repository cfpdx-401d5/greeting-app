const cowsay = require('cowsay');

module.exports = function greetCust(name, greeting, plain) {
    if (plain) {
        console.log(`${greeting} ${name}`); // retained for cli testing
        return `${greeting} ${name}`;
    } else {
        console.log(cowsay.say({text: `${greeting} ${name}`})); //retained for cli testing
        return cowsay.say({text: `${greeting} ${name}`});
    }
}
