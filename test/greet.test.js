var assert = require('assert');
var run = require('./run.js');
const cowsay = require('cowsay');

describe('greeting app', function() {

  // tests for --plain flag condition  
  it('greets by name', function() {
    var output = run(['./lib/greet.js', 'marty', '--plain']);
    assert.equal(output, 'hello marty');
  });

  it('greets using "stranger" as a default when no name provided', function() {
    var output = run(['./lib/greet.js', '', '--plain']);
    assert.equal(output, 'hello stranger');
  });

  // tests for cowsay functionality
  it('cowsay greets by name', function() {
    var output = run(['./lib/greet.js', 'marty', '']);
    assert.equal(output, cowsay.say({
      text: 'hello marty',
      e: '^^',
      T: 'U '
    }));
  });

  it('cowsay greets using "stranger" as a default when no name provided', function() {
    var output = run(['./lib/greet.js', '', '']);
    assert.equal(output, cowsay.say({
      text: 'hello stranger',
      e: '^^',
      T: 'U '
    }));
  });

});