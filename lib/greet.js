var cowsay = require("cowsay");
var name = process.argv[2] || 'stranger';

if (process.argv.indexOf('--plain') != -1) {
    console.log(`hello ${name}`)
} else {
    console.log(cowsay.say({
        text : `hello ${name}`
    }));
}
