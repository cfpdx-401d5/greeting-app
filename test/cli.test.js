var assert = require('assert');
var run = require('./run.js');
// const cli = require('../lib/cli');
const cowsay = require('cowsay')

describe('cli functionality - e2e', function() {

    it('greets by name --plain', function() {
        var output = run(['./lib/cli', 'marty', '--plain']);
        assert.equal(output, 'hello marty\n');
    });

    it('uses "stranger" as a default when no name provided --plain', function() {
        var output = run(['./lib/cli.js', '--plain']);
        assert.equal(output, 'hello stranger\n');
    });

    it('greets users by name with cowsay', function() {
        var output = run(['./lib/cli.js', 'marty']);
        assert.equal(output, cowsay.say({text: 'hello marty'}) + '\n')
    }); 

        it('greets users as "stranger" with cowsay when no inputs provided', function() {
        var output = run(['./lib/cli.js']);
        assert.equal(output, cowsay.say({text: 'hello stranger'}) + '\n')
    }); 


})