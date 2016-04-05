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
    });

    describe('empty', () => {
        it('should return true for an empty array', () => {
            expect(conditionals.empty([])).toEqual(true);
        });

        it('should return false for a non-empty array', () => {
            expect(conditionals.empty([5, 6, 7])).toEqual(false);
        });

        it('helper should work as expected after compilation', () => {
            var template = compile('{{empty array}}');

            expect(template({array: []})).toEqual('true');
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

            expect(template({array: [5,6,7]})).toEqual('3');
        });
    });
});
