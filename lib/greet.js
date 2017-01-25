
const cowsay = require('cowsay');

module.exports = function greet(name, greeting, plain) {

    if (plain) {
        return `${greeting} ${name}`;
    } else {
        return cowsay.say({
           text : `${greeting} ${name}`
        });
    }
};
