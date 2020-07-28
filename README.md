# Just Handlebars Helpers

[![NPM Version](https://img.shields.io/npm/v/just-handlebars-helpers.svg?style=flat-square)](https://www.npmjs.com/package/just-handlebars-helpers)
[![NPM Downloads](https://img.shields.io/npm/dt/just-handlebars-helpers.svg?style=flat-square)](https://www.npmjs.com/package/just-handlebars-helpers)
[![Travis](https://img.shields.io/travis/leapfrogtechnology/just-handlebars-helpers.svg?style=flat-square)](https://travis-ci.org/leapfrogtechnology/just-handlebars-helpers)
[![Codecov](https://img.shields.io/codecov/c/github/leapfrogtechnology/just-handlebars-helpers.svg?style=flat-square)](https://codecov.io/github/leapfrogtechnology/just-handlebars-helpers?branch=master)

A lightweight package with common [Handlebars](https://github.com/wycats/handlebars.js) helpers.

## Installation

```bash
npm install just-handlebars-helpers --save
```

```bash
yarn add just-handlebars-helpers
```

## Usage

### Browser

#### General Usage

```html
<!-- Load handlebars -->
<script src="/path/to/handlebars/dist/handlebars.min.js"></script>
<!-- Load just-handlebars-helpers -->
<script src="/path/to/just-handlebars-helpers/dist/h.min.js"></script>

<script type="text/javascript">
  // Register just-handlebars-helpers with handlebars
  H.registerHelpers(Handlebars);
</script>
```

#### Recommended Usage (CDN)

```html
<!-- Load handlebars -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.1.2/handlebars.min.js"></script>
<!-- Load just-handlebar-helpers -->
<script src="https://unpkg.com/just-handlebars-helpers@1.0.17/dist/h.min.js"></script>

<script type="text/javascript">
  // Register just-handlebars-helpers with handlebars
  H.registerHelpers(Handlebars);
</script>
```

### Node

```js
// Require handlebars and just-handlebars-helpers
const Handlebars = require('handlebars');
const H = require('just-handlebars-helpers');

// Register just-handlebars-helpers with handlebars
H.registerHelpers(Handlebars);
```

## Helpers

| Helper                                | Description                                           |
| ------------------------------------- | ----------------------------------------------------- |
| [eq](#eq)                             | Strict equality `===`                                 |
| [eqw](#eqw)                           | Equality `==`                                         |
| [neq](#neq)                           | Strict inequality `!==`                               |
| [neqw](#neqw)                         | Inequality `!=`                                       |
| [lt](#lt)                             | Less than `<`                                         |
| [lte](#lte)                           | Less than or equal `<=`                               |
| [gt](#gt)                             | Greater than `>`                                      |
| [gte](#gte)                           | Greater than or equal `>=`                            |
| [not](#not)                           | Not `!`                                               |
| [ifx](#ifx)                           | Imitates conditional operator `?:`                    |
| [empty](#empty)                       | Check if an array is empty                            |
| [count](#count)                       | Length of an array                                    |
| [and](#and)                           | Logical AND operation                                 |
| [or](#or)                             | Logical OR operation                                  |
| [coalesce](#coalesce)                 | Returns first non-falsy value from list of parameters |
| [includes](#includes)                 | Check for a value inside an array                     |
| [excerpt](#excerpt)                   | Extract a sub-string from a string                    |
| [sanitize](#sanitize)                 | Sanitize a string to url friendly dash/kebab case     |
| [newLineToBr](#newlinetobr)           | Replace new line with line breaks `<br>` of a string  |
| [capitalizeEach](#capitalizeeach)     | Capitalize the first letter of each word in a string  |
| [capitalizeFirst](#capitalizefirst)   | Capitalize the first letter of a string               |
| [sprintf](#sprintf)                   | String produced according to the formatting format    |
| [lowercase](#lowercase)               | String to lowercase                                   |
| [uppercase](#uppercase)               | String to uppercase                                   |
| [first](#first)                       | First element of an array                             |
| [last](#last)                         | Last element of an array                              |
| [concat](#concat)                     | Concatenate two or more strings                       |
| [join](#join)                         | Join elements of an array using a delimeter           |
| [sum](#sum)                           | Sum of two numbers                                    |
| [difference](#difference)             | Difference of two numbers                             |
| [ceil](#ceil)                         | Round a number upward to its nearest integer          |
| [floor](#floor)                       | Round a number downward to its nearest integer        |
| [abs](#abs)                           | Find the absolute value of a number                   |
| [formatDate](#formatdate)             | Format date to specified format                       |
| [showIf](#showif)                     | Show HTML element if expression is true               |
| [hideIf](#hideif)                     | Hide HTML element if expression is true               |
| [selectedIf](#selectedif)             | Select `<option>` if expression is true               |
| [checkedIf](#checkedif)               | Check the `<input>` checkbox if expression is true    |
| [options](#options)                   | Generate `<option>` list for `<select>`               |
| [formatCurrency](#formatcurrency)     | Format currency value according to country            |

### ⚠️

> Helpers [formatDate](#datetime), [formatCurrency](#formatcurrency) and [sprintf](#sprintf) depend on an external dependency and it is up to the user to install these dependencies. Check the helper documentation for what dependencies to install.

### Conditional

#### eq

Determine whether or not two values are equal (===).

Parameters:

```
value1 [any] First value to be compared with second. (Required)
value2 [any] Second value to be compared with first. (Required)
```

Returns `boolean`

Usage:

```
{{eq '3' 3}}    => false

{{#if (eq foo 'bar')}}
	Hello
{{/if}}
```

#### eqw

Determine whether or not two values are equal (==) i.e. weak checking.

Parameters:

```
value1 [any] First value to be compared with second. (Required)
value2 [any] Second value to be compared with first. (Required)
```

Returns `boolean`

Usage:

```
{{eqw '3' 3}}   => true

{{#if (eqw foo 'bar')}}
	Hello
{{/if}}
```

#### neq

Determine whether or not two values are not equal (!==).

Parameters:

```
value1 [any] First value to be compared with second. (Required)
value2 [any] Second value to be compared with first. (Required)
```

Returns `boolean`

Usage:

```
{{neq 4 3}}    => true

{{#if (neq foo 'bar')}}
	Hello
{{/if}}
```

#### neqw

Determine whether or not two values are not equal (!=) weak checking.

Parameters:

```
value1 [any] First value to be compared with second. (Required)
value2 [any] Second value to be compared with first. (Required)
```

Returns `boolean`

Usage:

```
{{neqw '3' 3}}    => false

{{#if (neqw foo 'bar')}}
	Hello
{{/if}}
```

#### lt

Check for less than condition (a < b).

Parameters:

```
value1 [any] First value to be compared with second. (Required)
value2 [any] Second value to be compared with first. (Required)
```

Returns `boolean`

Usage:

```
{{lt 2 3}}   => true

{{#if (lt 2 5)}}
	Hello
{{/if}}
```

#### lte

Check for less than or equals condition (a <= b).

Parameters:

```
value1 [any] First value to be compared with second. (Required)
value2 [any] Second value to be compared with first. (Required)
```

Returns `boolean`

Usage:

```
{{lte 2 3}}   => true

{{#if (lte 5 6)}}
	Hello
{{/if}}
```

#### gt

Check for greater than condition (a > b).

Parameters:

```
value1 [any] First value to be compared with second. (Required)
value2 [any] Second value to be compared with first. (Required)
```

Returns `boolean`

Usage:

```
{{gt 2 3}}   => false

{{#if (gt 10 7)}}
	Hello
{{/if}}
```

#### gte

Check for greater than or equals condition (a >= b).

Parameters:

```
value1 [any] First value to be compared with second. (Required)
value2 [any] Second value to be compared with first. (Required)
```

Returns `boolean`

Usage:

```
{{gte 3 3}}   => true

{{#if (gte 10 2)}}
	Hello
{{/if}}
```

#### not

Logical NOT of any expression. Equivalent to `!` operator.

Parameters:

```
expression [any] Any expression.
```

Returns `boolean`

Usage:

```
{{not true}}    => false
{{not false}}   => true

{{#if (not (eq foo 'bar'))}}
	Hello
{{/if}}
```

#### ifx

Helper to imitate the ternary conditional operator ?:. E.g. `5 > 7 ? 'foo' : 'bar'`.

Parameters:

```
condition [boolean] Satisfying condition for getting first value. Either true of false. (Required)
value1 [any] First value to be displayed as result. (Required)
value2 [any] Second value to be displayed as result. Defaults to an empty string (Optional)
```

Returns `any`

Usage:

```
{{ifx true 'Foo' 'Bar'}}        => Foo  // return (true) ? 'Foo' : 'Bar'
{{ifx false 'Foo' 'Bar'}}       => Foo  // return (false) ? 'Foo' : 'Bar'
{{ifx (eq value 1) 5 6}}        => 6    // return (value === 1) ? 5 : 6
{{ifx (not (eq value 1)) 5 6}}  => 6    // return (value !== 1) ? 5 : 6

<!-- The third parameter is optional, and by default it will be blank string ('') -->
{{ifx true 'active'}}  => 'active'
{{ifx false 'active'}}  => ''
```

#### empty

Check if an array is empty.

Parameters:

```
array [array] Array/object to be checked. (Required)
```

Returns `boolean`

Usage:

```
var array = [5, 6];     // An array.
{{empty array}} => false

{{#if (empty array)}}
	Hello
{{/if}}
```

#### count

Determine the length of an array. Equivalent to `array.length` operator in JavaScript.

Parameters:

```
array [array] Array whose elements to be counted. (Required)
```

Returns `number|false`

Usage:

```
var array = [5, 6];    // An array.
{{count array}} =>  2;
```

#### and

Returns the logical AND of two or more parameters passed i.e
it is true iff all the parameters are true.

Parameters:

```
params [any] Any number of boolean parameters. (Required)
```

Returns `boolean`

Usage:

```
var value1 = value2 = true;
{{and value1 value2}}    => true

var value1 = false, value2 = true;
{{and value1 value2}}    => false

{{#if (and value1 value2)}}
    // do something
{{else}}
    // do something else
{{/if}}
```

#### or

Returns the logical OR of two or more parameters passed i.e
it is true if any of the parameters is true.

Parameters:

```
params [any] Any number of boolean parameters. (Required)
```

Returns `boolean`

Usage:

```
var value1 = true, value2 = false;
{{or value1 value2}}    => true

var value = value2 = false;
{{or value1 value2}}    => false

{{#if (or value1 value2)}}
    // do something
{{else}}
    // do something else
{{/if}}
```

#### coalesce

Returns the first non-falsy value from the parameter list.
Works quite similar to the SQL's COALESCE() function, but unlike this
checks for the first non-false parameter.

Parameters:

```
params [any] Any number of parameters. (Required)
```

Returns `any`

Usage:

```
var fullName = 'Foo Bar', nickName = 'foob';
{{coalesce fullName nickName 'Unknown'}}    => 'Foo Bar'

var fullName = '', nickName = 'foob';
{{coalesce fullName nickName 'Unknown'}}    => 'foob'
```

#### includes

Returns true if an array includes a value.
It checks for the existence of the value in array strictly(value + data type) by default.
Can check non-strictly(value only) by sending third argument as false.

Parameters:

```
params [array] The array. (Required)
params [any] The value to be checked for existence in the array. (Required)
params [boolean] FALSE for non-strict checking. TRUE by default. (Optional)
```

Returns `boolean`

Usage:

```
var array = [1, 2, 3];
var value = 2;

{{includes array value}}        => true

var value = '2'
{{includes array value}}        => false
{{includes array value true}}   => false
{{includes array value false}}  => true

{{#if (includes array value)}}
   <!-- Do something -->
{{/if}}

{{ifx (includes array value) 'Yes' 'No'}}
```

### Strings

#### excerpt

Extract a sub-string from a string.

Parameters:

```
string [string] The string from which characters are to be extracted. (Required)
length [int] Number of characters to be extracted from string. Default value is 50. (Optional)
```

Returns `string`

Usage:

```
{{excerpt 'Just Wow' 4}} => 'Just...'
```

#### sanitize

Converts a string to URL friendly dash-case string removing special characters.

Parameters

```
string [string] The string to be converted to URL. (Required)
```

Returns `string`

Usage:

```
{{sanitize 'JuSt #Wow'}} => 'just-wow'
```

#### newLineToBr

Replace `\n` with `<br>` tags.

Parameters:

```
string [string] The string that needs replacement of \n by <br> tags. (Required)
```

Returns `string`

Usage:

```
{{{newLineToBr 'newLineToBr helper \n is very \n useful.'}}}    => newLineToBr helper <br> is very <br> useful.
```

#### capitalizeEach

Capitalize the first letter of each word in a string.

Parameters

```
string [string] The sentence/string to be capitalized. (Required)
```

Returns `string`

Usage:

```
{{capitalizeEach 'just wow'}} => 'Just Wow'
```

#### capitalizeFirst

Capitalize the first letter of a string.

Parameters:

```
string [string] The sentence/string to be capitalized. (Required)
```

Returns `string`

Usage:

```
{{capitalizeFirst 'just wow'}} => 'Just wow'
```

#### sprintf

`sprintf` helper sends formatted data as string output.

**Note:** To use `sprintf` helper install [sprintf-js](https://www.npmjs.com/package/sprintf-js).

`npm install sprintf-js --save`

Parameters:

```
format [string] The message/string that uses different formats of variables. (Required)
args [arbitrary arguments] Any number of parameters/values. (Required)
```

Returns `string`

Usage:

```
{{sprintf '%s %s!' 'Hello' 'Kabir' }}
{{sprintf '%s %s %d %s %d' 'Foo' 'Bar' 55 'Baz' '20'}}
{{sprintf '%(greeting)s %(name)s! How are you?' obj }}
{{sprintf '%(greeting)s %(name)s! ' greeting='Hello' name='Kabir'}}
```

#### lowercase

Changes the string to lowercase.

Parameters:

```
param [string] The string to be converted to lower case. (Required)
```

Returns `string`

Usage:

```
{{lowercase 'JUST WOW!!!'}} => 'just wow!!!'
```

#### uppercase

Changes the string to uppercase.

Parameters:

```
param [string] The string to be converted to upper case. (Required)
```

Returns `string`

Usage:

```
{{uppercase 'just wow!!!'}} => 'JUST WOW!!!'
```

#### first

Get the first element of a collection/array.

Parameters:

```
collection [array] The collection/array of objects(strings, integers). (Required)
```

Returns `string`

Usage:

```
someArray = ['David', 'Miller', 'Jones'];
{{first someArray}} => 'David'
```

#### last

Get the last element of a collection/array.

Parameters:

```
collection [array] The collection/array of objects(strings, integers). (Required)
```

Returns `string`

Usage:

```
someArray = ['David', 'Miller', 'Jones'];
{{last someArray}} => 'Jones'
```

#### concat

Concat two or more strings.

Parameters:

```
params [arguments] Any number of arguments. (Required)
```

Returns `string`

Usage:

```
{{concat 'Hello' ' world' '!!!'}} => 'Hello world!!!'
```

#### join

Join the elements of an array using a delimeter.

Parameters:

```
array [array] An array of elements to be joined. (Required)
delimeter [string] The delimeter using which the elements of array are to be joined. (Required)
```

Returns `string`

Usage:

```
someArray = ['Hands', 'legs', 'feet'];
{{join someArray ' & '}}   => 'Hands & legs & feet'
```

### Math

#### sum

A `sum` helper calculating the sum of two numbers.

Parameters:

```
value1 [number] First number. (Required)
value2 [number] Second number. (Required)
```

Returns `number`

Usage:

```
{{sum 1 2}}     => 3
{{sum 5.6 6.7}} => 12.3
```

#### difference

A `difference` helper calculating the difference of two numbers.

Parameters:

```
value1 [number] First number. (Required)
value2 [number] Second number. (Required)
```

Returns `number`

Usage:

```
{{difference 5 2}}      => 3
{{difference 7.2 3.4}}  => 3.8
```

#### ceil

A `ceil` helper to find the ceil value of the number. Equivalent to `Math.ceil()` in JavaScript.

Parameters:

```
value1 [number] Number to be rounded to nearest greater integer. (Required)
```

Returns `integer`

Usage:

```
{{ceil 5.6}}    => 6
```

#### floor

A `floor` helper to find the floor value of the number. Equivalent to `Math.floor()` in JavaScript.

Parameters:

```
value [number] Number to be rounded to nearest lower integer. (Required)
```

Returns `integer`

Usage:

```
{{floor 5.6}}   => 5
```

#### abs

An `abs` helper to find the absolute value of the number. Equivalent to `Math.abs()` in JavaScript.

Parameters:

```
value [number] Number to perform absolute value operation on. (Required)
```

Returns `number`

Usage:

```
{{abs -5.6}}   => 5.6
```

### DateTime

**Note:** To use DateTime helpers install [moment](https://www.npmjs.com/package/moment).

`npm install moment --save`

#### formatDate

A `formatDate` helper to format date using moment.js

Parameters:

```
formatString [string] Format string based on moment.js (Required)
date [date] The date/date-time that needs to be formatted. (set to current Date() if not provided)
localeString [string] ISO 3166-1 locale code represented in https://github.com/moment/moment/tree/develop/locale 
or an array of possible locale codes, of which moment will use the first one it has a localization for.
```

Returns `string`

Usage:

```
var date = new Date();      // Date | Date-time
{{formatDate 'MM/DD/YYYY' date}}

var date = new Date('01/22/2016');
var possibleI8nCodes = ['xy', 'aa', 'de'];
{{formatDate 'YYYY-MM-DD' date}}    => 2016-01-22
{{formatDate 'LLLL', date, 'es'}}    => 'viernes, 22 de enero de 2016 0:00'
{{formatDate 'LLLL', date, possibleI8nCodes}}    => 'Freitag, 22. Januar 2016 00:00'
```

### HTML

#### showIf

A `showIf` helper for showing any HTML element.

Parameters:

```
expression [boolean] Condition to be checked. (Required)
```

Returns `string`

Usage:

```
{{showIf true}}     => ''
{{showIf false}}    => 'hidden'
```

#### hideIf

A `hideIf` helper for hiding any HTML element.

Parameters:

```
expression [boolean] Condition to be checked. (Required)
```

Returns `string`

Usage:

```
{{hideIf true}}     => 'hidden'
{{hideIf false}}    => ''
```

#### selectedIf

A `selectedIf` helper for dropdown and radio boxes.

Parameters:

```
expression [boolean] Condition to be checked. (Required)
```

Returns `string`

Usage:

```
{{selectedIf true}}     => 'selected'
```

#### checkedIf

A `checkedIf` helper for checkboxes.

Parameters:

```
expression [boolean] Condition to be checked. (Required)
```

Returns `string`

Usage:

```
{{checkedIf true}}      => 'checked'
```

#### options

An `options` helper for generating `<option>` list for `<select>` dropdowns.

Parameters:

```
data [array] List of data (Required)
id [string] Name of identifier key from the data list, defaults to id (Optional)
text [string] Name of description key from the data list, defaults to description (Optional)
selected [string] Id to be set as selected (Optional)
```

Usage:

```
{{{options data}}}
{{{options data selected="value"}}}
{{{options data id="id" text="description"}}}
```

A simple example:

```
const data = [
    {
        id: 1,
        description: 'Foo'
    },
    {
        id: 2,
        description: 'Bar'
    },
    {
        id: 3,
        description: 'Foo Bar'
    }
];
```

```
{{{options data selected="2"}}}
```

will generate HTML:

```
<option value="1">Foo</option>
<option value="2" selected>Bar</option>
<option value="3">Foo Bar</option>
```

You can also override the default key names for `id` & `description` using the `id` & `text` options in the helper.

```
const data = [
    {
        value: 1,
        text: 'New York'
    },
    {
        value: 2,
        text: 'London'
    }
];
```

```
{{{options data selected="1" id="value" text="text"}}}
```

will generate HTML:

```
<option value="1" selected>New York</option>
<option value="2">London</option>
```

### Formatters

#### formatCurrency

Format the currency value according to country code and locale.

**Note:** To use the `formatCurrency` helper install [currencyformatter.js](https://www.npmjs.com/package/currencyformatter.js).

`npm install currencyformatter.js --save`

Parameters:

```
value [number] The numerical value of currency. (Required)
args [arbitrary arguments] The currency formatting parameters. (Optional)
```

Returns: `string`

Usage:

```
{{formatCurrency 1234567.89 code='USD'}}  => $1,234,567.89
{{formatCurrency 1234567.89 code='EUR'}}  => 1.234.567,89 €
{{formatCurrency 1234567.89 code='EUR' locale="en"}}  => €1,234,567.89
```

Note: The currency formatting parameters are used from [https://github.com/osrec/currencyFormatter.js](https://github.com/osrec/currencyFormatter.js).

## Contributing

Project participants should adhere to the [Code of Conduct](CODE_OF_CONDUCT.md). If you are unsure about how to contribute please file an [issue](https://github.com/leapfrogtechnology/just-handlebars-helpers/issues/new).

Start here: [src/H.js](src/H.js)

```bash
# Install dependencies
$ yarn

# Lint source code
$ yarn lint

# Compile everything
$ gulp

# Run all the tests
$ yarn test
```

## Inspired by

- [Swag](https://github.com/elving/swag)
- [Dashbars](https://github.com/pismute/dashbars)
- [Assemble](https://github.com/assemble/handlebars-helpers)

## Change Log

Check the [CHANGELOG](CHANGELOG.md) for change log and release history.

## License

Licensed under [The MIT License](LICENSE.md).
