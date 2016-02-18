# HandlebarHelpers
A lightweight package with common handlebars helpers.

## Installation

```bash
$ npm install just-handlebars-helpers
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
 * Add support for using in node environment
 * Add Helpers
  * include
  * formatDate (based on moment)
  * sprintf (based on sprintf-js)

## Testing the helpers

```bash
# Install dependencies
$ npm install

# Compile everything
$ gulp

# Run all the tests
$ karma start
```
