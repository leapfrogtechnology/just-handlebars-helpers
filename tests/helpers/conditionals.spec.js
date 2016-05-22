import {compile} from 'handlebars';
import conditionals from '../../src/helpers/conditionals';

describe('conditionals', () => {

    describe('eq', () => {
        it('should return true if provided params are equal and are of same type', () => {
            expect(conditionals.eq('1', '1')).toEqual(true);
        });

        it('should return false if provided params are equal but not of same type', () => {
            expect(conditionals.eq('1', 1)).toEqual(false);
        });

        it('helper should work as expected after compilation', () => {
            var template = compile('{{eq value 1}}');

            expect(template({value: '1'})).toEqual('false');
        });

        it('helper could be used in if', () => {
            var template = compile('{{#if (eq value "1")}}Just Wow{{/if}}');

            expect(template({value: '1'})).toEqual('Just Wow');
        });
    });

    describe('eqw', () => {
        it('should return true if provided params are equal and are of same type', () => {
            expect(conditionals.eqw('1', '1')).toEqual(true);
        });

        it('should also return true if provided params are equal but not of same type', () => {
            expect(conditionals.eqw('1', 1)).toEqual(true);
        });

        it('helper should work as expected after compilation', () => {
            var template = compile('{{eqw value 1}}');

            expect(template({value: '1'})).toEqual('true');
        });

        it('helper could be used in if', () => {
            var template = compile('{{#if (eqw value 1)}}Just Wow{{/if}}');

            expect(template({value: '1'})).toEqual('Just Wow');
        });
    });

    describe('neq', () => {
        it('should return true if provided params are not equal', () => {
            expect(conditionals.neq(4, 3)).toEqual(true);
        });

        it('should return false if provided params are equal and of same type', () => {
            expect(conditionals.neq(3, 3)).toEqual(false);
        });

        it('should return true if provided params are equal but of different types', () => {
            expect(conditionals.neq('3', 3)).toEqual(true);
        });

        it('helper should work as expected after compilation', () => {
            var template = compile('{{neq value 1}}');

            expect(template({value: 1})).toEqual('false');
        });

        it('helper could be used in if', () => {
            var template = compile('{{#if (neq value 1)}}Just Wow{{/if}}');

            expect(template({value: '1'})).toEqual('Just Wow');
        });
    });

    describe('neqw', () => {
        it('should return true if provided params are not equal', () => {
            expect(conditionals.neqw(4, 3)).toEqual(true);
        });

        it('should return false if provided params are equal and of same type', () => {
            expect(conditionals.neqw(3, 3)).toEqual(false);
        });

        it('should return false if provided params are equal but of different types', () => {
            expect(conditionals.neqw('3', 3)).toEqual(false);
        });

        it('helper should work as expected after compilation', () => {
            var template = compile('{{neqw value 1}}');

            expect(template({value: '1'})).toEqual('false');
        });

        it('helper could be used in if', () => {
            var template = compile('{{#if (neqw value 2)}}Just Wow{{/if}}');

            expect(template({value: '1'})).toEqual('Just Wow');
        });
    });

    describe('lt', () => {
        it('should return true if param1 is smaller than param2', () => {
            expect(conditionals.lt(1, 2)).toEqual(true);
        });

        it('should return false if param1 is equal to param2', () => {
            expect(conditionals.lt(1, 1)).toEqual(false);
        });

        it('should return false if param2 is smaller than param1', () => {
            expect(conditionals.lt('31', '11')).toEqual(false); // Lexicographical Order
        });

        it('helper should work as expected after compilation', () => {
            var template = compile('{{lt value 1}}');

            expect(template({value: 2})).toEqual('false');
        });

        it('helper could be used in if', () => {
            var template = compile('{{#if (lt value 5)}}Just Wow{{/if}}');

            expect(template({value: '1'})).toEqual('Just Wow');
        });
    });

    describe('lte', () => {
        it('should return true if param1 is smaller than param2', () => {
            expect(conditionals.lte(1, 2)).toEqual(true);
        });

        it('should return true if param1 is equal to param2', () => {
            expect(conditionals.lte(1, 1)).toEqual(true);
        });

        it('should return false if param2 is smaller than param1', () => {
            expect(conditionals.lte(2, 1)).toEqual(false);
        });

        it('helper should work as expected after compilation', () => {
            var template = compile('{{lte value 1}}');

            expect(template({value: 2})).toEqual('false');
        });

        it('helper could be used in if', () => {
            var template = compile('{{#if (lte value 4)}}Just Wow{{/if}}');

            expect(template({value: 2})).toEqual('Just Wow');
        });
    });

    describe('gt', () => {
        it('should return true if param1 is greater than param2', () => {
            expect(conditionals.gt(2, 1)).toEqual(true);
        });

        it('should return false if param1 is equal to param2', () => {
            expect(conditionals.gt(1, 1)).toEqual(false);
        });

        it('should return false if param2 is greater than param1', () => {
            expect(conditionals.gt('11', '31')).toEqual(false); // Lexicographical Order
        });

        it('helper should work as expected after compilation', () => {
            var template = compile('{{gt value 2}}');

            expect(template({value: 1})).toEqual('false');
        });

        it('helper could be used in if', () => {
            var template = compile('{{#if (gt value 2)}}Just Wow{{/if}}');

            expect(template({value: 6})).toEqual('Just Wow');
        });
    });


    describe('gte', () => {
        it('should return true if param1 is greater than param2', () => {
            expect(conditionals.gte(2, 1)).toEqual(true);
        });

        it('should return true if param1 is equal to param2', () => {
            expect(conditionals.gte(1, 1)).toEqual(true);
        });

        it('should return false if param2 is greater than param1', () => {
            expect(conditionals.gte(1, 2)).toEqual(false); // Lexicographical Order
        });

        it('helper should work as expected after compilation', () => {
            var template = compile('{{gte value 1}}');

            expect(template({value: 1})).toEqual('true');
        });

        it('helper could be used in if', () => {
            var template = compile('{{#if (gte value 1)}}Just Wow{{/if}}');

            expect(template({value: 1})).toEqual('Just Wow');
        });
    });

    describe('ifx', () => {
        it('should return value1 if the condition holds true', () => {
            expect(conditionals.ifx(2 > 1, 'value 1', 'value 2')).toEqual('value 1');
        });

        it('should return value2 if the condition results to false', () => {
            expect(conditionals.ifx(2 < 1, 'value 1', 'value 2')).toEqual('value 2');
        });

        it('helper should work as expected after compilation', () => {
            var template = compile('{{ifx condition 1 0}}');

            expect(template({condition: true})).toEqual('1');
        });

        it('helper should work as expected with any other conditional helper', () => {
            var template = compile('{{ifx (eq value 1) 5 6}}');

            expect(template({value: 1})).toEqual('5');
        });

        it('helper should work as expected with any other conditional helper with false condition', () => {
            var template = compile('{{ifx (eq value 1) 5 6}}');

            expect(template({value: 2})).toEqual('6');
        });

        it('helper should work as expected with multiple level of nested helpers', () => {
            var template = compile('{{ifx (not (eq value 1)) 5 6}}');

            expect(template({value: 1})).toEqual('6');
        });

        it('helper should work as expected with multiple level of nested helpers with false condition', () => {
            var template = compile('{{ifx (not (eq value 1)) 5 6}}');

            expect(template({value: 2})).toEqual('5');
        });

        it('allows to skip the third parameter', () => {
            var template = compile('{{ifx isActive "active"}}');

            expect(template({isActive: true})).toEqual('active');
        });

        it('returns a blank string by default for the false case if third parameter is omitted', () => {
            var template = compile('{{ifx isActive "active"}}');

            expect(template({isActive: false})).toEqual('');
        });
    });

    describe('not', () => {
        it('should return true if false is passed', () => {
            expect(conditionals.not(false)).toEqual(true);
        });

        it('should return false if true is passed', () => {
            expect(conditionals.not(true)).toEqual(false);
        });

        it('helper should work as expected after compilation', () => {
            var template = compile('{{not boolean}}');

            expect(template({boolean: false})).toEqual('true');
        });

        it('helper could be used in if', () => {
            var template = compile('{{#if (not (eq value 4))}}Just Wow{{/if}}');

            expect(template({value: 5})).toEqual('Just Wow');
        });
    });

    describe('empty', () => {
        it('should return true for an empty array', () => {
            expect(conditionals.empty([])).toEqual(true);
        });

        it('should return false for a non-empty array', () => {
            expect(conditionals.empty([5, 6, 7])).toEqual(false);
        });

        it('should return true for a non-array', () => {
            expect(conditionals.empty('Foo Bar')).toEqual(true);
        });

        it('helper should work as expected after compilation', () => {
            var template = compile('{{empty array}}');

            expect(template({array: []})).toEqual('true');
        });

        it('helper could be used in if', () => {
            var template = compile('{{#if (empty arr)}}Just Wow{{/if}}');

            expect(template({arr: []})).toEqual('Just Wow');
        });
    });

    describe('count', () => {
        it('should return the length of an array', () => {
            expect(conditionals.count([5, 6, 9])).toEqual(3);
        });

        it('should return false if param is not an array', () => {
            expect(conditionals.count({foo: 'bar'})).toEqual(false);
        });

        it('helper should work as expected after compilation', () => {
            let template = compile('{{count array}}');

            expect(template({array: [5, 6, 7]})).toEqual('3');
        });
    });

    describe('and', () => {
        it('should return true if all the parameters are true', () => {
            var value1 = true, value2 = true, value3 = true;

            expect(conditionals.and(value1, value2, value3)).toEqual(true);
        });

        it('should return false if any of the parameters is false', () => {
            var value1 = false, value2 = true, value3 = true;

            expect(conditionals.and(value1, value2, value3)).toEqual(false);
        });

        it('should return true if all the parameters are true after compilation', () => {
            var template = compile('{{and condition1 condition2 condition3}}');

            expect(template({condition1: true, condition2: true, condition3: true})).toEqual('true');
        });

        it('should return false if any of the parameters is false after compilation', () => {
            var template = compile('{{and condition1 condition2 condition3}}');

            expect(template({condition1: true, condition2: false, condition3: true})).toEqual('false');
        });
    });

    describe('or', () => {
        it('should return false if all the parameters are false', () => {
            var value1 = false, value2 = false, value3 = false;

            expect(conditionals.or(value1, value2, value3)).toEqual(false);
        });

        it('should return true if any of the param value is true', () => {
            var value1 = false, value2 = false, value3 = true;

            expect(conditionals.or(value1, value2, value3)).toEqual(true);
        });

        it('should return false if all the parameters are false after compilation', () => {
            var template = compile('{{or condition1 condition2 condition3}}');

            expect(template({condition1: false, condition2: false, condition3: false})).toEqual('false');
        });

        it('should return true if any of the param value is true after compilation', () => {
            var template = compile('{{or condition1 condition2 condition3}}');

            expect(template({condition1: true, condition2: false, condition3: true})).toEqual('true');
        });
    });

    describe('coalesce', () => {
        it('should return first non-false parameter', () => {
            expect(conditionals.coalesce(null, undefined, false, 0, 'Hello', 'world')).toEqual('Hello');
        });

        it('should work with only two parameters', () => {
            expect(conditionals.coalesce(null, 'Hello')).toEqual('Hello');
        });

        it('should work with a single parameter', () => {
            expect(conditionals.coalesce('Hello')).toEqual('Hello');
        });

        it('should return first non-false parameter after compilation', () => {
            var template = compile('{{coalesce fullName nickName "Unknown"}}');

            expect(template({fullName: '', nickName: null})).toEqual('Unknown');
        });

        it('should ignore rest of the parameters if a true value is found', () => {
            var template = compile('{{coalesce fullName nickName "Unknown"}}');

            expect(template({fullName: 'Foo Bar', nickName: 'foob'})).toEqual('Foo Bar');
        });

        it('should work with a single parameter after compilation', () => {
            var template = compile('{{coalesce fullName}}');

            expect(template({fullName: 'Foo Bar'})).toEqual('Foo Bar');
        });

        it('should return the last parameter if all the parameters are falsy', () => {
            var template = compile('{{coalesce fullName nickName}}');

            expect(template({fullName: null, nickName: ''})).toEqual('');
        });
    });
});
