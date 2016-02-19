# HandlebarHelpers
A lightweight package with common helpers for [Handlebars](https://github.com/wycats/handlebars.js)

## Installation

```bash
$ npm install just-handlebars-helpers --save
```
## Usage

```html
<!-- Load Handlebars -->
<script type="text/javascript" src="/node_modules/handlebars/dist/handlebars.min.js"></script>
<!-- Load the package -->
<script type="text/javascript" src="/node_modules/just-handlebars-helpers/dist/h.min.js"></script>
<script type="text/javascript">
    // Register helpers for Handlebars
    H.registerHelpers(Handlebars);
</script>
```

## TODO
 * Support using with CommonJS require i.e `var H = require('just-handlebars-helpers');`
 * Add Helpers
  * `include`
  * `formatDate` (based on moment)
  * `sprintf` (based on sprintf-js)
  * `join`
  * `split`

## Testing the helpers

```bash
# Install dependencies
$ npm install

# Compile everything
$ gulp

# Run all the tests
$ karma start
```

## Inspired by 
 * [Swag](https://github.com/elving/swag)
 * [Dashbars](https://github.com/pismute/dashbars)
 * [Assemble](https://github.com/assemble/handlebars-helpers)
