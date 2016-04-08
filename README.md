# Just Handlebars Helpers
[![NPM Version](https://img.shields.io/npm/v/just-handlebars-helpers.svg?style=flat-square)](https://www.npmjs.com/package/just-handlebars-helpers)
[![NPM Downloads](https://img.shields.io/npm/dt/just-handlebars-helpers.svg?style=flat-square)](https://www.npmjs.com/package/just-handlebars-helpers)
[![Code Climate](https://img.shields.io/codeclimate/github/kabisaict/flow.svg?style=flat-square)](https://codeclimate.com/github/leapfrogtechnology/just-handlebars-helpers)
[![Travis](https://img.shields.io/travis/leapfrogtechnology/just-handlebars-helpers.svg?style=flat-square)](https://travis-ci.org/leapfrogtechnology/just-handlebars-helpers)
[![Codecov](https://img.shields.io/codecov/c/github/codecov/example-python.svg?style=flat-square)](https://codecov.io/github/leapfrogtechnology/just-handlebars-helpers?branch=master)

A lightweight package with common [Handlebars](https://github.com/wycats/handlebars.js) helpers.

## Installation

```bash
$ npm install just-handlebars-helpers --save
```
## Usage

#### Browsers:

```html
<!-- Load Handlebars -->
<script type="text/javascript" src="/path/to/handlebars/dist/handlebars.min.js"></script>
<!-- Load the package -->
<script type="text/javascript" src="/path/to/just-handlebars-helpers/dist/h.min.js"></script>
<script type="text/javascript">
    // Register helpers for Handlebars
    H.registerHelpers(Handlebars);
</script>

```
#### Node:

```javascript
// Load Handlebars
var Handlebars = require('handlebars');
// Load the package
var H = require('just-handlebars-helpers');

// Register helpers for Handlebars
H.registerHelpers(Handlebars);
```
## Helpers
### Conditional
#### eq
Determine whether or not two values are equal (===).

Parameters:
```
value1 [mixed] First value to be compared with second. (Required)
value2 [mixed] Second value to be compared with first. (Required)
```
Returns `boolean`

Usage:
```
{{eq '3' 3}}    => false

// Could be also used in if
{{#if (eq foo 'bar')}}
	Hello
{{/if}}
```

#### eqw
Determine whether or not two values are equal (==) i.e. weak checking.

Parameters:
```
value1 [mixed] First value to be compared with second. (Required)
value2 [mixed] Second value to be compared with first. (Required)
```
Returns `boolean`

Usage:
```
{{eqw '3' 3}}   => true

// Could be also used in if
{{#if (eqw foo 'bar')}}
	Hello
{{/if}}
```

#### neq
Determine whether or not two values are not equal (!==).

Parameters:
```
value1 [mixed] First value to be compared with second. (Required)
value2 [mixed] Second value to be compared with first. (Required)
```
Returns `boolean`

Usage:
```
{{neq 4 3}}    => true

// Could be also used in if
{{#if (neq foo 'bar')}}
	Hello
{{/if}}
```

#### neqw
Determine whether or not two values are not equal (!=) weak checking.

Parameters:
```
value1 [mixed] First value to be compared with second. (Required)
value2 [mixed] Second value to be compared with first. (Required)
```
Returns `boolean`

Usage:
```
{{neqw '3' 3}}    => false

// Could be also used in if
{{#if (neqw foo 'bar')}}
	Hello
{{/if}}
```

#### lt
Check for less than condition (a < b).

Parameters:
```
value1 [mixed] First value to be compared with second. (Required)
value2 [mixed] Second value to be compared with first. (Required)
```
Returns `boolean`

Usage:
```
{{lt 2 3}}   => true

// Could be also used in if
{{#if (lt 2 5)}}
	Hello
{{/if}}
```

#### lte
Check for less than or equals condition (a <= b).

Parameters:
```
value1 [mixed] First value to be compared with second. (Required)
value2 [mixed] Second value to be compared with first. (Required)
```
Returns `boolean`

Usage:
```
{{lte 2 3}}   => true

// Could be also used in if
{{#if (lte 5 6)}}
	Hello
{{/if}}
```

#### gt
Check for greater than condition (a > b).

Parameters:
```
value1 [mixed] First value to be compared with second. (Required)
value2 [mixed] Second value to be compared with first. (Required)
```
Returns `boolean`

Usage:
```
{{gt 2 3}}   => false

// Could be also used in if
{{#if (gt 10 7)}}
	Hello
{{/if}}
```

#### gte
Check for greater than or equals condition (a >= b).

Parameters:
```
value1 [mixed] First value to be compared with second. (Required)
value2 [mixed] Second value to be compared with first. (Required)
```
Returns `boolean`

Usage:
```
{{gte 3 3}}   => true

// Could be also used in if
{{#if (gte 10 2)}}
	Hello
{{/if}}
```

#### not
Logical NOT of any expression. Equivalent to `!` operator.

Parameters:
```
expression [mixed] Any expression.
```
Returns `boolean`

Usage:
```
{{not true}}    => false
{{not false}}   => true

// Could be also used in if
{{#if (not (eq foo 'bar'))}}
	Hello
{{/if}}
```

#### ifx
Helper to imitate the ternary conditional operator ?:. E.g. `5 > 7 ? 'foo' : 'bar'`.

Parameters:
```
condition [boolean] Satisfying condition for getting first value. Either true of false. (Required)
value1 [mixed] First value to be displayed as result. (Required)
value2 [mixed] Second value to be displayed as result. (Required)
```
Returns `value1 | value2`

Usage:
```
{{ifx true 'Foo' 'Bar'}}        => Foo  // return (true) ? 'Foo' : 'Bar'
{{ifx false 'Foo' 'Bar'}}       => Foo  // return (false) ? 'Foo' : 'Bar'
{{ifx (eq value 1) 5 6}}        => 6    // return (value === 1) ? 5 : 6
{{ifx (not (eq value 1)) 5 6}}  => 6    // return (value !== 1) ? 5 : 6
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


// Could be also used in if
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

#### capitalizeEach
Capitalize each letter of every words in a string.

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
A sprintf helper to be used in the handlebars templates that supports arbitrary parameters.

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
A sum helper calculating the sum of two numbers.

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
A difference helper calculating the difference of two numbers.

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
A ceil helper to find the ceil value of the number. Equivalent to `Math.ceil()` in JavaScript.

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
A floor helper to find the floor value of the number. Equivalent to `Math.floor()` in JavaScript.

Parameters:
```
value [number] Number to be rounded to nearest lower integer. (Required)
```
Returns `integer`

Usage:
```
{{floor 5.6}} => 5
```

### Date-time
#### formatDate
A formatDate helper to format date using moment js.

Parameters:
```
formatString [string] Format string based on moment.js (Required)
date [date] The date/date-time that needs to be formatted. (Required)
```
Returns `string`

Usage:
```
var date = new Date();      // Date | Date-time
{{formatDate 'MM/DD/YYYY' date}}

var date = new Date('01/22/2016');
{{formatDate 'YYYY-MM-DD' date}}    => 2016-01-22
```

### HTML
#### showIf
A showIf helper for showing any html element.

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
A hideIf helper for hiding any html element.

Parameters:
```
expression [boolean] Condition to be checked. (Required)
```
Returns `string`

Usage:
```
{{hideIf true}}     => 'hidden'
{{hideIf false}}     => ''
```

#### selectedIf
A selectedIf helper for dropdown and radio boxes.

Parameters:
```
expression [boolean] Condition to be checked. (Required)
```
Returns `string`

Usage:
```
{{selectedIf true}} =>  'selected'
```

#### checkedIf
A checkedIf helper for checkboxes.

Parameters:
```
expression [boolean] Condition to be checked. (Required)
```
Returns `string`

Usage:
```
{{checkedIf true}}  => 'checked'
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
