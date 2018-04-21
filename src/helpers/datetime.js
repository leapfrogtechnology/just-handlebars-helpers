import { isString } from '../util/utils';

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
export function formatDate(formatString, date) {
  let moment = global.moment;

  if (!moment) {
    moment = require('moment');
  }

  formatString = isString(formatString) ? formatString : '';

  return moment(date || new Date()).format(formatString);
}
