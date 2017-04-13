import {isString} from '../util/utils';

export default {
    /**
     * A formatDate helper to format date using moment js.
     *
     * @example
     *      {{formatDate 'MM/DD/YYYY' date}}
     *
     * @param formatString based on moment.js
     * @param date
     * @return string
     */
    formatDate: (formatString, date) => {

        let moment = global.moment;

        if (!moment) {
            moment = require('moment');
        }

        formatString = isString(formatString) ? formatString : '';

        return moment(date || new Date()).format(formatString);
    }
};
