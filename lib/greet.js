var cowsay = require('cowsay');

var name = process.argv[2] || 'stranger';

if (process.argv[3] === '--plain') {
    console.log(`Hello, ${name}`);
}
else if (process.argv[2] === '--plain') {
    console.log('Hello, stranger');
}

else {
    console.log(cowsay.say({
    text: `hello ${name}`,
    }));
};