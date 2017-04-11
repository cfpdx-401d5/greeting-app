var assert = require('assert');
const cowsay = require('cowsay')
const greetCust = require('../lib/greet')

describe('greeting app - greet function', function() {
    
    it('custom greet custom name --plain', function() {
        // console.log('greetCust=', greetCust);
        var output = greetCust('marty', 'charmed', '--plain');
        assert.equal(output, 'charmed marty');
    });

    it('custom greet custom name', function() {
        // console.log('greetCust=', greetCust);
        var output = greetCust('marty', 'charmed');
        assert.equal(output, cowsay.say({text: 'charmed marty'}));
    });

})