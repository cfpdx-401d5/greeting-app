var assert = require('assert');
var run = require('./run.js');
const greet = require('../lib/greet');
const cowsay = require('cowsay');

describe('greeting app - greet.js', () => {
    
    it('greeting at takes three arguments', () => {
        var output = greet('brigitte', 'hi', true);
        assert.equal(output, 'hi brigitte');
    });

    it('checks cowsay', () => {
        var output = greet('brigitte', 'hi', false);
        assert.equal(output, 
        cowsay.say({
           text : `hi brigitte`
        }));
    });

});

describe('greeting app - cli.js', function() {

    it('uses "stranger" as a default when no name provided', function() {
        var output = run(['./cli.js', '', '--plain']);
        assert.equal(output, 'hello stranger\n');
    });

    it('greets with name without cowsay', function() {
        var output = run(['./cli.js', '--name:brigitte', '--plain']);
        assert.equal(output, 'hello brigitte\n');
    });

    it('greets with specific salutation', () => {
        var output = run(['./cli.js', '--greeting:hola', '--plain']);
        assert.equal(output, 'hola stranger\n');
    });

});