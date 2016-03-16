
import {compile} from 'handlebars';
import strings from '../../src/helpers/strings';

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
    });

    describe('sanitize', () => {
        it('should return a normal string as dash case', () => {
            expect(strings.sanitize('Just    wow')).toEqual('just-wow');
        });

        it('should return a string with special characters as dash case without special characters', () => {
            expect(strings.sanitize('*JuST *#wow#')).toEqual('just-wow');
        });
    });

    describe('capitalizeFirst', () => {
        it('should capitalize the first letter of a string', () => {
            expect(strings.capitalizeFirst('just wow')).toEqual('Just wow');
        });

        it('should return the param if it is not a string', () => {
            expect(strings.capitalizeFirst(1.1)).toEqual(1.1);
        });
    });

    describe('capitalizeEach', () => {
        it('should capitalize the first letter of a string', () => {
            expect(strings.capitalizeEach('just wow')).toEqual('Just Wow');
        });

        it('should return the param if it is not a string', () => {
            expect(strings.capitalizeEach(1)).toEqual(1);
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
            var obj = {
                hash: {
                    greeting: 'Hello',
                    name: 'Kabir'
                }
            };

            expect(strings.sprintf('%(greeting)s %(name)s!', obj)).toEqual('Hello Kabir!');
        });

        it('should work as expected after compilation (Basic support)', () => {
            var template = compile('{{sprintf "%(greeting)s %(name)s!" greeting=greeting name=name }}');
            var obj = {
                greeting: 'Hello',
                name: 'Kabir'
            };

            expect(template(obj)).toEqual('Hello Kabir!');
        });

        it('should work as expected after compilation (C-style sprintf)', () => {
            var template = compile('{{sprintf "%s %s!" "Hello" "Kabir" }}');

            expect(template()).toEqual('Hello Kabir!');
        });

        it('should work as expected after compilation (C-style sprintf) with arbitrary number of parameters', () => {
            var template = compile('{{sprintf "This is a test: %s %s %d %s %d" "Foo" "Bar" 55 "Baz" "20"}}');

            expect(template()).toEqual('This is a test: Foo Bar 55 Baz 20');
        });

        it('should work as expected after compilation if an object is passed dynamically', () => {
            var template = compile('{{sprintf "%(greeting)s %(name)s! How are you?" obj }}');
            var obj = {
                greeting: 'Hello',
                name: 'Kabir'
            };

            expect(template({
                obj
            })).toEqual('Hello Kabir! How are you?');
        });
    });
});
