var assert = require('assert');
var run = require('./run.js');

describe('greeting app', function() {
//     it('greets by name with cowsay', function() {
//         var output = run(['./lib/greet.js', 'brigitte']);
//         assert.equal(output, `
//  ________________
// < hello brigitte >
//  ----------------
//         \   ^__^
//          \  (oo)\_______
//             (__)\       )\/\
//                 ||----w |
//                 ||     ||
//         `
//         );
//     });

    // it('uses "stranger" as a default when no name provided', function() {
    //     var output = run(['./lib/greet.js']);
    //     assert.equal(output, 'hello stranger\n');
    // });

    it('greets with name without cowsay', function() {
        var output = run(['./lib/greet.js', 'brigitte', '--plain']);
        assert.equal( output, 'hello brigitte\n');
    });
});