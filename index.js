/**
 * is-installed <https://github.com/tunnckoCore/is-installed>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var detectInstalled = require('detect-installed');

module.exports = function isInstalled(name) {
  return !detectInstalled(name) ? detectInstalled(name, true) : true;
};
