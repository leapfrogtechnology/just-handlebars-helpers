import {compile} from 'handlebars';
import math from '../../src/helpers/math';

describe('math', () => {

    describe('sum', () => {
        it('should return the sum of two passed values', () => {
            expect(math.sum(5, 6)).toEqual(11);
        });

        it('helper should return the sum of two passed values', () => {
            let template = compile('{{sum value 5}}');

            expect(template({value: 6})).toEqual('11');
        });

        it('helper should also work with floats', () => {
            let template = compile('{{sum value 5.1}}');

            expect(template({value: 6.7})).toEqual('11.8');
        });
    });

    describe('difference', () => {
        it('should return the difference of two passed values', () => {
            expect(math.difference(5, 6)).toEqual(-1);
        });

        it('helper should return the difference of two passed values', () => {
            let template = compile('{{difference value 5}}');

            expect(template({value: 6})).toEqual('1');
        });

        it('helper should also work with floats', () => {
            let template = compile('{{difference value 1.2}}');

            expect(template({value: 6.5})).toEqual('5.3');
        });
    });

    describe('ceil', () => {
        it('should return the ceil value of a float number', () => {
            expect(math.ceil(5.666)).toEqual(6);
        });

        it('helper should also return the ceil value of a float number', () => {
            let template = compile('{{ceil value}}');

            expect(template({value: '5.666'})).toEqual('6');
        });
    });

    describe('floor', () => {
        it('should return the floor value of a float number', () => {
            expect(math.floor(5.666)).toEqual(5);
        });

        it('helper should also return the floor value of a float number', () => {
            let template = compile('{{floor value}}');

            expect(template({value: '5.666'})).toEqual('5');
        });
    });

});
