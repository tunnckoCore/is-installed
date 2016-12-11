/*!
 * is-installed <https://github.com/tunnckoCore/is-installed>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (http://i.am.charlike.online)
 * Released under the MIT license.
 */

'use strict'

const detect = require('detect-installed')

module.exports = function isInstalled (name) {
  return detect(name, { local: true }).then((exists) => {
    return exists || detect(name)
  })
}

module.exports.sync = function isInstalledSync (name) {
  return detect.sync(name, { local: true }) || detect.sync(name)
}
