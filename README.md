# @isbl/cross-glob

[![MIT License](https://img.shields.io/npm/l/@isbl/cross-glob?style=flat)](https://github.com/CodeWitchBella/isbl-cross-glob/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/@isbl/cross-glob?style=flat)](https://www.npmjs.com/package/@isbl/cross-glob)
[![dependencies](https://img.shields.io/librariesio/release/npm/@isbl/cross-glob?style=flat)](https://github.com/CodeWitchBella/isbl-cross-glob/blob/main/package.json)
![](https://img.shields.io/github/last-commit/CodeWitchBella/isbl-cross-glob?style=flat)
[![Releases](https://img.shields.io/github/release-date/CodeWitchBella/isbl-cross-glob?style=flat)](https://github.com/CodeWitchBella/isbl-cross-glob/releases)

Utility for writing npm scripts which use glob and work cross-platform

Install:

```sh
yarn add -D @isbl/cross-glob
```

Then prefix your script with cross-glob

```json
replace
"build": "tsc packages/**/*.json"
with
"build": "cross-glob tsc -b \"packages/**/*.json\""
```

the quotes are required to avoid expansion by your shell. It could work but
could also break with various shells.
