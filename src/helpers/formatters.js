import {isObject, isUndefined} from '../util/utils';

export default {

    /**
     * Format the currency according to the country.
     * @example
     *      {{formatCurrency 1234567.89 code='USD'}}  => $1,234,567.89
     *      {{formatCurrency 1234567.89 code='EUR'}}  => 1.234.567,89 €
     *      {{formatCurrency 1234567.89 code='EUR' locale="en"}}  => €1,234,567.89
     *
     * @param value
     * @param args
     */
    formatCurrency: (value, ...args) => {
        let currencyFormatter = global.OSREC && global.OSREC.CurrencyFormatter;
        let handlebars = global.Handlebars;

        if (isUndefined(currencyFormatter)) {
            currencyFormatter = require('currencyformatter.js');
        }

        if (isUndefined(handlebars)) {
            handlebars = require('handlebars');
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

        params.currency = !isUndefined(params.code) ? params.code : params.currency;

        if (!isUndefined(params.currency) && !(params.currency in currencyFormatter.symbols)) {
            console.error(`Invalid currency code ${params.currency} provided for helper \`formatCurrency\`.`);

            return;
        }

        return new handlebars.SafeString(currencyFormatter.format(value, params));
    }
};
