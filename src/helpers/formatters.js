import {isObject} from '../util/utils';

export default {

    /**
     * Format the currency according to the country.
     * @example
     *      {{currency 1000000 code='USD'}}  => $1,000,000.00
     *      {{currency 1000000 code='EUR'}}  => 1 000 000,00 €
     *      {{currency 1000000 code='EUR' precision=0}}  => 1 000 000 €
     *
     * @param value
     * @param args
     */
    formatCurrency: (value, ...args) => {
        let currencyFormatter = global.currencyFormatter;

        if (!currencyFormatter) {
            currencyFormatter = require('currencyFormatter');
        }

        let params = [];

        args.forEach(arg => {
            if (isObject(arg) && isObject(arg.hash)) {
                arg = arg.hash;
            }

            params.push(arg);
        });

        if (params.length) {
            params = params[0];
        }

        return currencyFormatter.format(value, params);
    }
};
