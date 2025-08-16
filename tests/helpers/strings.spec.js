import '../misc';
import { compile } from 'handlebars';
import * as strings from '../../src/helpers/strings';

describe('strings', () => {

  describe('excerpt', () => {
    it('should extract all the characters from a string if it is less than 50 characters by default', () => {
      expect(strings.excerpt('just wow')).toEqual('just wow');
    });

    it('should extract 50 characters from a string if it has more than 50 characters by default', () => {
      expect(strings.excerpt('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'))
        .toEqual('Lorem ipsum dolor sit amet, consectetur adipisicin...');
    });

    it('should extract provided number of characters from a string', () => {
      expect(strings.excerpt('Just wow', 4)).toEqual('Just...');
    });

    it('should extract all the characters from a string if the provided number of characters to be extracted is more than the number of characters', () => {
      expect(strings.excerpt('wow', 10)).toEqual('wow');
    });

    it('should return the string if the length parameter is not a number', () => {
      expect(strings.excerpt('just wow', 'random')).toEqual('just wow');
    });

    it('should return the parameter as it is if it is not a string', () => {
      expect(strings.excerpt(45)).toEqual(45);
    });

    it('should work as expected after compilation', () => {
      const template = compile('{{excerpt string 10}}');

      expect(template({ string: 'That can only mean one thing' })).toEqual('That can o...');
    });

    it('should work as expected after compilation with user-provided suffix', () => {
      const template = compile('{{excerpt string 10 suffix=""}}');

      expect(template({ string: 'That can only mean one thing' })).toEqual('That can o');
    });

    it('should work as expected after compilation with user-provided suffix', () => {
      const template = compile('{{excerpt string 10 suffix="asdf"}}');

      expect(template({ string: 'That can only mean one thing' })).toEqual('That can oasdf');
    });

    
  });

  describe('sanitize', () => {
    it('should return a normal string as dash case', () => {
      expect(strings.sanitize('Just    wow')).toEqual('just-wow');
    });

    it('should return a string with special characters as dash case without special characters', () => {
      expect(strings.sanitize('*JuST *#wow#')).toEqual('just-wow');
    });

    it('should work as expected after compilation', () => {
      const template = compile('{{sanitize string}}');

      expect(template({ string: '*JuST *#wow#' })).toEqual('just-wow');
    });
  });

  describe('newLineToBr', () => {
    it('should replace \\n with <br> tags', () => {
      expect(strings.newLineToBr('newLineToBr helper \n is very \n useful.')).toEqual('newLineToBr helper <br> is very <br> useful.');
    });

    it('should replace \\n with <br> tags after compilation', () => {
      const template = compile('{{{newLineToBr string}}}');

      expect(template({ string: 'newLineToBr helper \n is very \n useful.' })).toEqual('newLineToBr helper <br> is very <br> useful.');
    });
  });

  describe('capitalizeFirst', () => {
    it('should capitalize the first constter of a string', () => {
      expect(strings.capitalizeFirst('just wow')).toEqual('Just wow');
    });

    it('should return the param if it is not a string', () => {
      expect(strings.capitalizeFirst(1.1)).toEqual(1.1);
    });

    it('should work as expected after compilation', () => {
      const template = compile('{{capitalizeFirst string}}');

      expect(template({ string: 'just wow' })).toEqual('Just wow');
    });
  });

  describe('capitalizeEach', () => {
    it('should capitalize the first constter of a string', () => {
      expect(strings.capitalizeEach('just wow')).toEqual('Just Wow');
    });

    it('should return the param if it is not a string', () => {
      expect(strings.capitalizeEach(1)).toEqual(1);
    });

    it('should work as expected after compilation', () => {
      const template = compile('{{capitalizeEach string}}');

      expect(template({ string: 'just wow' })).toEqual('Just Wow');
    });
  });

  describe('sprintf', () => {
    it('function should work as expected (basic support)', () => {
      expect(strings.sprintf('%(greeting)s %(name)s!', {
        hash: {
          greeting: 'Hello',
          name: 'Kabir'
        }
      })).toEqual('Hello Kabir!');
    });

    it('should work as expected (Basic support)', () => {
      const obj = {
        hash: {
          greeting: 'Hello',
          name: 'Kabir'
        }
      };

      expect(strings.sprintf('%(greeting)s %(name)s!', obj)).toEqual('Hello Kabir!');
    });

    it('should work as expected after compilation (Basic support)', () => {
      const template = compile('{{sprintf "%(greeting)s %(name)s!" greeting=greeting name=name }}');
      const obj = {
        greeting: 'Hello',
        name: 'Kabir'
      };

      expect(template(obj)).toEqual('Hello Kabir!');
    });

    it('should work as expected after compilation (C-style sprintf)', () => {
      const template = compile('{{sprintf "%s %s!" "Hello" "Kabir" }}');

      expect(template()).toEqual('Hello Kabir!');
    });

    it('should work as expected after compilation (C-style sprintf) with arbitrary number of parameters', () => {
      const template = compile('{{sprintf "This is a test: %s %s %d %s %d" "Foo" "Bar" 55 "Baz" "20"}}');

      expect(template()).toEqual('This is a test: Foo Bar 55 Baz 20');
    });

    it('should work as expected after compilation if an object is passed dynamically', () => {
      const template = compile('{{sprintf "%(greeting)s %(name)s! How are you?" obj }}');
      const obj = {
        greeting: 'Hello',
        name: 'Kabir'
      };

      expect(template({
        obj
      })).toEqual('Hello Kabir! How are you?');
    });
  });

  describe('lowercase', () => {
    it('should return lowercase value of a string param', () => {
      expect(strings.lowercase('Hello World!')).toEqual('hello world!');
    });

    it('should should work as expected after compilation (Basic Support)', () => {
      const template = compile('{{lowercase val}}');
      const obj = {
        val: 'JUST WOW!!!'
      };

      expect(template(obj)).toEqual('just wow!!!');
    });
  });

  describe('uppercase', () => {
    it('should return uppercase value of a string param', () => {
      expect(strings.uppercase('hello world!')).toEqual('HELLO WORLD!');
    });

    it('should work as expected after compilation (Basic Support)', () => {
      const template = compile('{{uppercase val}}');
      const obj = {
        val: 'just wow!!!'
      };

      expect(template(obj)).toEqual('JUST WOW!!!');
    });
  });

  describe('first', () => {
    it('should return first element of an array(string)', () => {
      expect(strings.first(['David', 'Miller', 'Jones'])).toEqual('David');
    });

    it('should return empty string if the array is empty', () => {
      expect(strings.first([])).toEqual('');
    });

    it('should work as expected after compilation (Basic Supprt)', () => {
      const template = compile('{{first fullName}}');
      const obj = {
        fullName: [
          'David',
          'Miller',
          'Jones'
        ]
      };

      expect(template(obj)).toEqual('David');
    });
  });

  describe('last', () => {
    it('should return last element of an array(string)', () => {
      expect(strings.last(['David', 'Miller', 'Jones'])).toEqual('Jones');
    });

    it('should return empty string if the array is empty', () => {
      expect(strings.last([])).toEqual('');
    });

    it('should work as expected after compilation (Basic Supprt)', () => {
      const template = compile('{{last fullName}}');
      const obj = {
        fullName: [
          'David',
          'Miller',
          'Jones'
        ]
      };

      expect(template(obj)).toEqual('Jones');
    });
  });

  describe('concat', () => {
    it('should return concatenation of all param values(string)', () => {
      expect(strings.concat('hello', ' ', 'world', '!!!')).toEqual('hello world!!!');
    });

    it('should return concatenation of all param values(string and integer)', () => {
      expect(strings.concat('I have got', ' ', 4, ' ', 'apples.')).toEqual('I have got 4 apples.');
    });

    it('should work as expected for string params after compilation (Basic Support)', () => {
      const template = compile('{{concat first " " middle " " last}}');
      const name = {
        first: 'David',
        middle: 'Miller',
        last: 'Jones'
      };

      expect(template(name)).toEqual('David Miller Jones');
    });

    it('should work as expected for string and integer params after compilation (Basic Support)', () => {
      const template = compile('{{concat s1 amount s2}}');
      const sentence = {
        s1: 'I have got ',
        amount: 4,
        s2: ' apples.'
      };

      expect(template(sentence)).toEqual('I have got 4 apples.');
    });
  });

  describe('join', () => {
    it('should join the values of array of strings using the delimeter provided', () => {
      expect(strings.join(['Hands', 'legs', 'feet'], ' & ')).toEqual('Hands & legs & feet');
    });

    it('should return concatenation of elements of array using empty string if no delimeter provided', () => {
      expect(strings.join(['Hands', 'legs', 'feet'])).toEqual('Handslegsfeet');
    });

    it('should return false if the parameter is not an array', () => {
      expect(strings.join('hello')).toEqual(false);
    });

    it('should work as expected for array of strings after compilation (Basic Support)', () => {
      const template = compile('{{join fruits " "}}');
      const obj = {
        fruits: ['Apple', 'Banana', 'Mango']
      };

      expect(template(obj)).toEqual('Apple Banana Mango');
    });

    it('should work as expected for some array and no delimeter after compilation (Basic Support)', () => {
      const template = compile('{{join fruits}}');
      const obj = {
        fruits: ['Mango', 'Apple', 'Banana']
      };

      expect(template(obj)).toEqual('MangoAppleBanana');
    });
  });

});
