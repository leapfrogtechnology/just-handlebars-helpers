
import {isString} from '../util/utils';

export default {

    /**
     * A formatDate helper to format date using moment js.
     *
     * Example usage:
     *      {{formatDate 'MM/DD/YYYY' date}}
     *
     * @param formatString based on moment.js
     * @param date Unformatted Date
     * @return string
     */
    formatDate: (formatString, date) => {

        let moment = require('moment');
        formatString = isString(formatString) ? formatString : '';

        return moment(date || new Date()).format(formatString);
    }
};
