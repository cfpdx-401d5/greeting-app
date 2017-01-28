var assert = require('assert');
var run = require('./run.js');
const cowsay = require('cowsay')

describe('greeting app', function() {
    
    it('greets by name --plain', function() {
        var output = run(['./lib/greet', 'marty', '--plain']);
        assert.equal(output, 'hello marty\n');
    });

    it('uses "stranger" as a default when no name provided --plain', function() {
        var output = run(['./lib/greet.js', '--plain']);
        assert.equal(output, 'hello stranger\n');
    });

    it('greets users with cowsay', function() {
        var output = run(['./lib/greet.js', 'marty']);
        assert.equal(output, cowsay.say({text: 'hello marty'}) + '\n')
    }); 

})