var assert = require('assert');
var run = require('./run.js');

describe('greeting app', function() {
    it('greets by name', function() {
        var output = run(['./lib/greet.js', 'marty']);
        assert.equal(output, ` ______________
< Hello, marty >
 --------------
        \\   ^__^
         \\  (oO)\\_______
            (__)\\       )\\/\\
             U  ||----w |
                ||     ||\n`);
    });

    it('uses "stranger" as a default when no name provided', function() {
        var output = run(['./lib/greet.js']);
        assert.equal(output,  ` _________________
< Hello, stranger >
 -----------------
        \\   ^__^
         \\  (oO)\\_______
            (__)\\       )\\/\\
             U  ||----w |
                ||     ||\n`);
    });
});