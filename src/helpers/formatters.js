import {precision, isObject} from '../util/utils';

export default {

    /**
     * Format the currency according to the country.
     * @example
     *      {{currency 1000000 code='USD'}}  => $1,000,000
     *      {{currency 1000000 code='EUR' precision=2}}  => 1 000 000,00 €
     *
     * @param value
     * @param args
     */
    currency: (value, ...args) => {
        let currencyFormatter = require('currency-formatter');

        if (!currencyFormatter) {
            throw new Error('Currency Formatter JS is required for this helper. Make sure you have loaded moment js https://www.npmjs.com/package/currency-formatter');
        }

        let params = [];

        args.forEach(arg => {
            if (isObject(arg) && isObject(arg.hash)) {
                arg = arg.hash;
            }

            arg.precision = arg.precision ? arg.precision : precision(value);

            params.push(arg);
        });

        if (params.length) {
            params = params[0];
        }

        return currencyFormatter.format(value, params);
    }
};
