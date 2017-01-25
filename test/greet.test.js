var assert = require('assert');
var run = require('./run.js');
var greeting = require('~/Public/401/labs/greeting-app/lib/greet.js').greeting;

describe('greeting app ', function() {
    it('greets by name with plain text option', function() {
        var output = run(['./lib/greet.js', 'marty', '--plain']);
        assert.equal(output, 'hello marty\n');
    });

    it('uses "stranger" as a default when no name provided plain text', function() {
        var output = run(['./lib/greet.js', '--plain']);
        assert.equal(output, 'hello stranger\n');
    });

});