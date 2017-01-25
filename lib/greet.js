var cowsay = require('cowsay');

var name = process.argv[2] || 'stranger';

if (process.argv[3]) {
    console.log(`hello ${name}`);
}
else { console.log(cowsay.say({
	text: `hello ${name}`,
	e: 'oO',
	T: 'U'
    }));
}