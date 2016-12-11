/*!
 * is-installed <https://github.com/tunnckoCore/is-installed>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (http://i.am.charlike.online)
 * Released under the MIT license.
 */

'use strict'

const detect = require('detect-installed')

/**
 * > Check if given `name` package is installed locally,
 * then checks if it exists globally, using [detect-installed][]
 * and so [global-modules][] (which in turn rely on [global-prefix][]).
 * Windows bugs comes from [global-prefix][].
 *
 * **Example**
 *
 * ```js
 * const isInstalled = require('is-installed')
 *
 * isInstalled('npm').then((exists) => {
 *   console.log(exists) // => true
 * })
 *
 * // installed locally for this package
 * isInstalled('detect-installed').then((exists) => {
 *   console.log(exists) // => true
 * })
 *
 * isInstalled('foo-bar-baz-qux').then((exists) => {
 *   console.log(exists) // => false
 * })
 * ```
 *
 * @param  {String} `name` package name
 * @return {Promise} resolved promise with boolean value
 * @api public
 */

module.exports = function isInstalled (name) {
  return detect(name, { local: true }).then((exists) => {
    return exists || detect(name)
  })
}

/**
 * > Synchronously check if package `name` is installed.
 *
 * **Example**
 *
 * ```js
 * const isInstalled = require('is-installed')
 *
 * const npmExists = isInstalled.sync('npm')
 * console.log(npmExists) // => true
 *
 * const notExists = isInstalled.sync('foo-abra-fsddsfsd-fsdf')
 * console.log(notExists) // => false
 * ```
 *
 * @param  {String} `name` package name
 * @return {Boolean} always boolean `true` or `false`
 * @api public
 */

module.exports.sync = function isInstalledSync (name) {
  return detect.sync(name, { local: true }) || detect.sync(name)
}
