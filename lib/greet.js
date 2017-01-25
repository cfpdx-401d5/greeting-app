var cowsay = require('cowsay');

var name = process.argv[2] || 'stranger';

console.log(cowsay.say({
	text: `hello ${name}`,
	e: 'oO',
	T: 'U'
}));