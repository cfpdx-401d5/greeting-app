
const cowsay = require('cowsay');

module.exports = function greet(name, plain) {
    if (!name) {
        name = 'stranger';
    };

    if (plain) {
        return `hello ${name}`;
    } else {
        return cowsay.say({
           text : `hello ${name}`
        });
    }
};
