var cowsay = require('cowsay');
var name = process.argv[2] || 'stranger';
// console.log(`hello ${name}`);

console.log(cowsay.say({
    text: `hello ${name}`
    })
);
