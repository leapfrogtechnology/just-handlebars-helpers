import faker from 'faker';
import {compile} from 'handlebars';

describe('formatters', () => {
    describe('formatCurrency', () => {
        it('should return USD currency for USD code after compilation', () => {
            let template = compile('{{formatCurrency 1234567.89 currency="USD"}}');

            expect(template()).toEqual('&#x24;1,234,567.89');
        });

        it('should return EUR currency for EUR code after compilation', () => {
            let template = compile('{{formatCurrency 1234567.89 currency="EUR"}}');

            expect(template()).toEqual('1.234.567,89 &#x20ac;');
        });

        it('should return EUR currency with en locale for EUR code and en locale after compilation', () => {
            let template = compile('{{formatCurrency 1234567.89 currency="EUR" locale="en"}}');

            expect(template()).toEqual('&#x20ac;1,234,567.89');
        });

        it('should return USD currency with no currency code after compilation', () => {
            let template = compile('{{formatCurrency 1234567.89}}');

            expect(template()).toEqual('&#x24;1,234,567.89');
        });

        it('should return negative NaN USD currency no value after compilation', () => {
            let template = compile('{{formatCurrency}}');

            expect(template()).toEqual('-&#x24;NaN');
        });

        it('should return negative NaN USD currency invalid value after compilation', () => {
            let template = compile('{{formatCurrency value}}');

            expect(template({value: faker.random.word()})).toEqual('-&#x24;NaN');
        });

        it('should return USD currency value in string after compilation', () => {
            let template = compile('{{formatCurrency "1234567"}}');

            expect(template()).toEqual('&#x24;1,234,567.00');
        });

        it('should return empty value for invalid currency code only', () => {
            let template = compile('{{formatCurrency 1234567.89 currency=code}}');

            expect(template({code: faker.address.countryCode()})).toEqual('');
        });

        it('should return USD with en locale for invalid locale only', () => {
            let template = compile('{{formatCurrency 1234567.89 en=locale}}');

            expect(template({locale: faker.random.locale()})).toEqual('&#x24;1,234,567.89');
        });

        it('should return empty value for invalid currency code and en locale', () => {
            let template = compile('{{formatCurrency 1234567.89 currency=code}}');

            expect(template({code: faker.address.countryCode()})).toEqual('');
        });
    });
});
