import {isObject, isUndefined, isNumeric} from '../util/utils';

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

        if (!currencyFormatter) {
            currencyFormatter = require('currencyformatter.js');
        }

        if (!handlebars) {
            handlebars = require('handlebars');
        }

        let params = {};

        if (isObject(args[0]) && isObject(args[0].hash)) {
            params = args[0].hash;
        }

        params.currency = !isUndefined(params.code) ? params.code : params.currency;

        if (!isUndefined(params.currency) && !(params.currency in currencyFormatter.symbols)) {
            console.error(`Invalid currency code ${params.currency} provided for helper \`formatCurrency\`.`);

            return;
        }

        if (!isNumeric(value)) {
            return;
        }

        return new handlebars.SafeString(currencyFormatter.format(value, params));
    }
};
