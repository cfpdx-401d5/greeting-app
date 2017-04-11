var assert = require('assert');
var run = require('./run.js');
const cowsay = require('cowsay')

describe('cli functionality - e2e', function() {

    it('custom greeting custom name --plain', function() {
        var output = run(['./lib/cli', '--name:marty', '--greeting:charmed', '--plain']);
        assert.equal(output, 'charmed marty\n');
    });

    it('custom greeting custom name', function() {
        var output = run(['./lib/cli', '--name:marty', '--greeting:charmed']);
        assert.equal(output, cowsay.say({text: 'charmed marty'}) + '\n');
    });

    it('custom greeting default name --plain', function() {
        var output = run(['./lib/cli', '--greeting:charmed', '--plain']);
        assert.equal(output, 'charmed partner\n');
    });

    it('custom greeting default name', function() {
        var output = run(['./lib/cli', '--greeting:charmed']);
        assert.equal(output, cowsay.say({text: 'charmed partner'}) + '\n');
    });

    it('default greeting custom name --plain', function() {
        var output = run(['./lib/cli', '--name:marty', '--plain']);
        assert.equal(output, 'hello marty\n');
    });

    it('default greeting custom name', function() {
        var output = run(['./lib/cli', '--name:marty']);
        assert.equal(output, cowsay.say({text: 'hello marty'}) + '\n');
    });

})