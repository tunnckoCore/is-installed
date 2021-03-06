# is-installed [![NPM version](https://img.shields.io/npm/v/is-installed.svg?style=flat)](https://www.npmjs.com/package/is-installed) [![NPM downloads](https://img.shields.io/npm/dm/is-installed.svg?style=flat)](https://npmjs.org/package/is-installed) [![npm total downloads][downloads-img]][downloads-url]

> Checks that given package is installed locally or globally. Useful for robust resolving when you want some package - it will check first if it exists locally, then if it exists globally

[![code climate][codeclimate-img]][codeclimate-url] 
[![standard code style][standard-img]][standard-url] 
[![linux build status][travis-img]][travis-url] 
[![windows build status][appveyor-img]][appveyor-url] 
[![coverage status][coveralls-img]][coveralls-url] 
[![dependency status][david-img]][david-url]

You might also be interested in [get-installed-path](https://github.com/tunnckocore/get-installed-path#readme).

## Table of Contents
- [Install](#install)
- [Usage](#usage)
- [API](#api)
  * [isInstalled](#isinstalled)
  * [.sync](#sync)
- [Related](#related)
- [Contributing](#contributing)
- [Building docs](#building-docs)
- [Running tests](#running-tests)
- [Author](#author)
- [License](#license)

_(TOC generated by [verb](https://github.com/verbose/verb) using [markdown-toc](https://github.com/jonschlinkert/markdown-toc))_

## Install
Install with [npm](https://www.npmjs.com/)

```
$ npm install is-installed --save
```

or install using [yarn](https://yarnpkg.com)

```
$ yarn add is-installed
```

## Usage
> For more use-cases see the [tests](test.js)

```js
const isInstalled = require('is-installed')
```

## API

### [isInstalled](index.js#L42)
> Check if given `name` package is installed locally, then checks if it exists globally, using [detect-installed][] and so [global-modules][] (which in turn rely on [global-prefix][]). Windows bugs comes from [global-prefix][].

**Params**

* `name` **{String}**: package name    
* `returns` **{Promise}**: resolved promise with boolean value  

**Example**

```js
const isInstalled = require('is-installed')

isInstalled('npm').then((exists) => {
  console.log(exists) // => true
})

// installed locally for this package
isInstalled('detect-installed').then((exists) => {
  console.log(exists) // => true
})

isInstalled('foo-bar-baz-qux').then((exists) => {
  console.log(exists) // => false
})
```

### [.sync](index.js#L68)
> Synchronously check if package `name` is installed.

**Params**

* `name` **{String}**: package name    
* `returns` **{Boolean}**: always boolean `true` or `false`  

**Example**

```js
const isInstalled = require('is-installed')

const npmExists = isInstalled.sync('npm')
console.log(npmExists) // => true

const notExists = isInstalled.sync('foo-abra-fsddsfsd-fsdf')
console.log(notExists) // => false
```

## Related
- [always-done](https://www.npmjs.com/package/always-done): Handle completion and errors with elegance! Support for streams, callbacks, promises, child processes, async/await and sync functions. A drop-in replacement… [more](https://github.com/hybridables/always-done#readme) | [homepage](https://github.com/hybridables/always-done#readme "Handle completion and errors with elegance! Support for streams, callbacks, promises, child processes, async/await and sync functions. A drop-in replacement for [async-done][] - pass 100% of its tests plus more")
- [detect-installed](https://www.npmjs.com/package/detect-installed): Checks that given package is installed globally or locally. | [homepage](https://github.com/tunnckocore/detect-installed#readme "Checks that given package is installed globally or locally.")
- [get-installed-path](https://www.npmjs.com/package/get-installed-path): Get locally or globally installation path of given package name | [homepage](https://github.com/tunnckocore/get-installed-path#readme "Get locally or globally installation path of given package name")
- [global-modules](https://www.npmjs.com/package/global-modules): The directory used by npm for globally installed npm modules. | [homepage](https://github.com/jonschlinkert/global-modules "The directory used by npm for globally installed npm modules.")
- [global-paths](https://www.npmjs.com/package/global-paths): Returns an array of unique "global" directories based on the user's platform and environment. The resulting paths can be used… [more](https://github.com/jonschlinkert/global-paths) | [homepage](https://github.com/jonschlinkert/global-paths "Returns an array of unique "global" directories based on the user's platform and environment. The resulting paths can be used for doing lookups for generators or other globally installed npm packages. Node.js / JavaScript.")
- [global-prefix](https://www.npmjs.com/package/global-prefix): Get the npm global path prefix. | [homepage](https://github.com/jonschlinkert/global-prefix "Get the npm global path prefix.")
- [minibase](https://www.npmjs.com/package/minibase): Minimalist alternative for Base. Build complex APIs with small units called plugins. Works well with most of the already existing… [more](https://github.com/node-minibase/minibase#readme) | [homepage](https://github.com/node-minibase/minibase#readme "Minimalist alternative for Base. Build complex APIs with small units called plugins. Works well with most of the already existing [base][] plugins.")
- [try-catch-core](https://www.npmjs.com/package/try-catch-core): Low-level package to handle completion and errors of sync or asynchronous functions, using [once][] and [dezalgo][] libs. Useful for and… [more](https://github.com/hybridables/try-catch-core#readme) | [homepage](https://github.com/hybridables/try-catch-core#readme "Low-level package to handle completion and errors of sync or asynchronous functions, using [once][] and [dezalgo][] libs. Useful for and used in higher-level libs such as [always-done][] to handle completion of anything.")

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/is-installed/issues/new).  
Please read the [contributing guidelines](CONTRIBUTING.md) for advice on opening issues, pull requests, and coding standards.  
If you need some help and can spent some cash, feel free to [contact me at CodeMentor.io](https://www.codementor.io/tunnckocore?utm_source=github&utm_medium=button&utm_term=tunnckocore&utm_campaign=github) too.

**In short:** If you want to contribute to that project, please follow these things

1. Please DO NOT edit [README.md](README.md), [CHANGELOG.md](CHANGELOG.md) and [.verb.md](.verb.md) files. See ["Building docs"](#building-docs) section.
2. Ensure anything is okey by installing the dependencies and run the tests. See ["Running tests"](#running-tests) section.
3. Always use `npm run commit` to commit changes instead of `git commit`, because it is interactive and user-friendly. It uses [commitizen][] behind the scenes, which follows Conventional Changelog idealogy.
4. Do NOT bump the version in package.json. For that we use `npm run release`, which is [standard-version][] and follows Conventional Changelog idealogy.

Thanks a lot! :)

## Building docs
Documentation and that readme is generated using [verb-generate-readme][], which is a [verb][] generator, so you need to install both of them and then run `verb` command like that

```
$ npm install verbose/verb#dev verb-generate-readme --global && verb
```

_Please don't edit the README directly. Any changes to the readme must be made in [.verb.md](.verb.md)._

## Running tests
Clone repository and run the following in that cloned directory

```
$ npm install && npm test
```

## Author
**Charlike Mike Reagent**

+ [github/tunnckoCore](https://github.com/tunnckoCore)
+ [twitter/tunnckoCore](http://twitter.com/tunnckoCore)
+ [codementor/tunnckoCore](https://codementor.io/tunnckoCore)

## License
Copyright © 2016, [Charlike Mike Reagent](http://i.am.charlike.online). Released under the [MIT license](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.2.0, on December 11, 2016._  
_Project scaffolded using [charlike][] cli._

[always-done]: https://github.com/hybridables/always-done
[async-done]: https://github.com/gulpjs/async-done
[base]: https://github.com/node-base/base
[charlike]: https://github.com/tunnckocore/charlike
[commitizen]: https://github.com/commitizen/cz-cli
[dezalgo]: https://github.com/npm/dezalgo
[once]: https://github.com/isaacs/once
[standard-version]: https://github.com/conventional-changelog/standard-version
[verb-generate-readme]: https://github.com/verbose/verb-generate-readme
[verb]: https://github.com/verbose/verb

[downloads-url]: https://www.npmjs.com/package/is-installed
[downloads-img]: https://img.shields.io/npm/dt/is-installed.svg

[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/is-installed
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/is-installed.svg

[travis-url]: https://travis-ci.org/tunnckoCore/is-installed
[travis-img]: https://img.shields.io/travis/tunnckoCore/is-installed/master.svg?label=linux

[appveyor-url]: https://ci.appveyor.com/project/tunnckoCore/is-installed
[appveyor-img]: https://img.shields.io/appveyor/ci/tunnckoCore/is-installed/master.svg?label=windows

[coveralls-url]: https://coveralls.io/r/tunnckoCore/is-installed
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/is-installed.svg

[david-url]: https://david-dm.org/tunnckoCore/is-installed
[david-img]: https://img.shields.io/david/tunnckoCore/is-installed.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[detect-installed]: https://github.com/tunnckocore/detect-installed
[global-modules]: https://github.com/jonschlinkert/global-modules
[global-prefix]: https://github.com/jonschlinkert/global-prefix