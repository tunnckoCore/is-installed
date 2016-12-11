/*!
 * is-installed <https://github.com/tunnckoCore/is-installed>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (http://i.am.charlike.online)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

const test = require('mukla')
const isInstalled = require('./index')

test('async: should return true if exists locally or globally', () => {
  return isInstalled('npm').then((exists) => {
    test.strictEqual(exists, true)
  })
})

test('async: should return false if not exists', (done) => {
  const promise = isInstalled('sdfsf34f34-fdgdfjk345h345-sfsdf')

  promise.then((actual) => {
    test.strictEqual(actual, false)
    done()
  }, done).catch(done)
})

test('sync: should return true if exists on system', (done) => {
  test.strictEqual(isInstalled.sync('npm'), true)
  test.strictEqual(isInstalled.sync('detect-installed'), true)
  done()
})

test('sync: should return false if not exists globally/locally', (done) => {
  test.strictEqual(isInstalled.sync('sdakj34h5j34-fg4g54jk60-sasa'), false)
  done()
})
