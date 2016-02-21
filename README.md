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

## Testing the helpers

```bash
# Install dependencies
$ npm install

# Compile everything
$ gulp

# Run all the tests
$ npm test
```

## Inspired by 
 * [Swag](https://github.com/elving/swag)
 * [Dashbars](https://github.com/pismute/dashbars)
 * [Assemble](https://github.com/assemble/handlebars-helpers)
