var cowsay = require('cowsay');

var name = process.argv[2] || 'stranger';

if (process.argv[3] === '--plain'){
    console.log(`hello ${name}`);
} 
else if (process.argv[2] === '--plain'){ 
    console.log('hello stranger');
} 
else {
    console.log(cowsay.say({
        text: `hello ${name}`
    }));
}