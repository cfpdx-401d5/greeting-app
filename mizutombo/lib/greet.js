function greet(name, textFlag) {

  const cowsay = require('cowsay');
  require('./run.js');

  this.name = process.argv[2] || 'stranger';
  this.textFlag = process.argv[3];

  if (this.textFlag == '') {
  // enable cowsay to say greeting
    process.stdout.write(cowsay.say({
      text: `hello ${this.name}`,
      e: '^^',
      T: 'U '
    }));
  }

  if (this.textFlag == '--plain') {
  // use plain text for greeting
    process.stdout.write(`hello ${this.name}`);
  }
}

module.exports = greet;