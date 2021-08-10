# @isbl/cross-glob

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
