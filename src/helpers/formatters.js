import currencyFormatter from 'currency-formatter';

export default {

    /**
     * Format the currency according to the country.
     * @example
     *      {{currency 'USD' 1000000}}  => $1,000,000.00
     *      {{currency 'EUR' 1000000}}  => 1 000 000,00 €
     *
     * @param countryCode
     * @param value
     */
    currency: (countryCode, value) => {
        return currencyFormatter.format(value, {code: countryCode});
    }
};
