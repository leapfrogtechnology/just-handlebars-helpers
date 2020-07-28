import { isString, isArray } from '../util/utils';

/**
 * A formatDate helper to format date using moment js with optional locale designation.
 *
 * @example
 *      {{formatDate 'MM/DD/YYYY' date 'es'}}
 *
 * @param {string} formatString Based on moment.js.
 * @param {Date} date
 * @param {object} localeString Language or language-country locale string (or array of strings) available in https://github.com/moment/moment/tree/develop/locale .
 * @returns {string}
 */
export function formatDate(formatString, date, localeString) {
  let moment = global.moment;

  if (!moment) {
    moment = require('moment/min/moment-with-locales');
  }

  formatString = isString(formatString) ? formatString : '';

  if (isString(localeString) || isArray(localeString)) {
    const localeMoment = moment(date || new Date());

    localeMoment.locale(localeString);

    return localeMoment.format(formatString);
  }
  
  // use global moment and format with default locale
  return moment(date || new Date()).format(formatString);
}
