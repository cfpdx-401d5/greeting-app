const cowsay = require('cowsay');

var name = process.argv[2] || 'stranger';
var textFlag = process.argv[3];

if (textFlag == '') {
// enable cowsay to say greeting
  process.stdout.write(cowsay.say({
    text: `hello ${name}`,
    e: '^^',
    T: 'U '
  }));
}

if (textFlag == '--plain') {
  process.stdout.write(`hello ${name}`);
}