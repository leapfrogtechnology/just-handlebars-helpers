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

        let moment = require('moment');

        if (!moment) {
            throw new Error('Moment JS is required for this helper. Make sure you have loaded moment js http://momentjs.com/');
        }

        formatString = isString(formatString) ? formatString : '';

        return moment(date || new Date()).format(formatString);
    }
};
