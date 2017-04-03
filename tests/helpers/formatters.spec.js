import {compile} from 'handlebars';
import formatters from '../../src/helpers/formatters';

describe('formatters', () => {
    describe('currency', () => {
        it('should return USD currency', () => {
            expect(formatters.currency('USD', 1000000)).toEqual('$1,000,000.00');
        });

        it('should return USD currency after compilation', () => {
            let template = compile('{{currency countryCode value}}');

            expect(template({countryCode: 'USD', value: 100000})).toEqual('$100,000.00');
        });

        it('should return EUR currency', () => {
            expect(formatters.currency('EUR', 1000000)).toEqual('1 000 000,00 €');
        });

        it('should return EUR currency after compilation', () => {
            let template = compile('{{currency countryCode value}}');

            expect(template({countryCode: 'EUR', value: 100000})).toEqual('100 000,00 €');
        });

        it('should return formatted number on using invalid currency type', () => {
            expect(formatters.currency('ZZZ', 1000000)).toEqual('1,000,000.00');
        });

        it('should return formatted number on using invalid currency type after compilation', () => {
            let template = compile('{{currency countryCode value}}');

            expect(template({countryCode: 'ZZZ', value: 100000})).toEqual('100,000.00');
        });

        it('should return zero for invalid numbers', () => {
            expect(formatters.currency('USD', 'abc')).toEqual('$0.00');
        });

        it('should return zero for invalid numbers after compilation', () => {
            let template = compile('{{currency countryCode value}}');

            expect(template({countryCode: 'USD', value: 'test'})).toEqual('$0.00');
        });
    });
});
