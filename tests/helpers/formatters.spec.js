import {compile} from 'handlebars';

describe('formatters', () => {
    describe('formatCurrency', () => {
        it('should return USD currency for USD code after compilation', () => {
            let template = compile('{{formatCurrency 1234567.89 currency="USD"}}');

            expect(template()).toEqual('&amp;#x24;1,234,567.89');
        });

        it('should return EUR currency for EUR code after compilation', () => {
            let template = compile('{{formatCurrency 1234567.89 currency="EUR"}}');

            expect(template()).toEqual('1.234.567,89 &amp;#x20ac;');
        });

        it('should return EUR currency with en locale for EUR code and en locale after compilation', () => {
            let template = compile('{{formatCurrency 1234567.89 currency="EUR" locale="en"}}');

            expect(template()).toEqual('&amp;#x20ac;1,234,567.89');
        });

        it('should return USD currency with no currency code after compilation', () => {
            let template = compile('{{formatCurrency 1234567.89}}');

            expect(template()).toEqual('&amp;#x24;1,234,567.89');
        });

        it('should return negative NaN USD currency no value after compilation', () => {
            let template = compile('{{formatCurrency}}');

            expect(template()).toEqual('-&amp;#x24;NaN');
        });

        it('should return negative NaN USD currency invalid value after compilation', () => {
            let template = compile('{{formatCurrency "asd"}}');

            expect(template()).toEqual('-&amp;#x24;NaN');
        });

        it('should return USD currency value in string after compilation', () => {
            let template = compile('{{formatCurrency "1234567"}}');

            expect(template()).toEqual('&amp;#x24;1,234,567.00');
        });
    });
});
