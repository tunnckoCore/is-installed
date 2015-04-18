/**
 * is-installed <https://github.com/tunnckoCore/is-installed>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var test = require('assertit');
var isInstalled = require('./index');

test('is-installed:', function() {
  test('should throw TypeError if not a string given', function(done) {
    function fixture() {
      isInstalled([1, 2, 3]);
    }

    test.throws(fixture, /expect `name` to be string/);
    test.throws(fixture, TypeError);
    done();
  });
  test('should throw Error if empty string given', function(done) {
    function fixture() {
      isInstalled('');
    }

    test.throws(fixture, /expect `name` to be non empty string/);
    test.throws(fixture, Error);
    done();
  });
  test('should return true if package is installed globally', function(done) {
    test.equal(isInstalled('npm'), true);
    done();
  });
  test('should return false if package is not installed globally', function(done) {
    test.equal(isInstalled('koa'), false);
    done();
  });
  test('should return true if package is installed locally', function(done) {
    test.equal(isInstalled('detect-installed'), true);
    done();
  });
  test('should return false if package is not installed locally', function(done) {
    test.equal(isInstalled('export-files'), false);
    done();
  });
});
