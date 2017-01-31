var assert = require('assert');
// var run = require('./run.js');
const cowsay = require('cowsay')
const greet = require('../lib/greet')

describe('greeting app - greet function', function() {
    
    it('greets by name --plain', function() {
        console.log('app is', greet);
        var output = greet('marty', '--plain');
        assert.equal(output, 'hello marty');
    });
})