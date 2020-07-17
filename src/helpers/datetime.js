import { isString } from '../util/utils';

/**
 * A formatDate helper to format date using moment js.
 *
 * @example
 *      {{formatDate 'MM/DD/YYYY' date}}
 *
 * @param {string} formatString Based on moment.js.
 * @param {Date} date
 * @returns {string}
 */
export function formatDate(formatString, date) {
  let moment = global.moment;

  if (!moment) {
    moment = require('moment');
  }

  formatString = isString(formatString) ? formatString : '';

  return moment(date || new Date()).format(formatString);
}

/**
 * A formatLocaleDate helper to format date with locale using moment js.
 *
 * @example
 *      {{formatDate 'MM/DD/YYYY' 'es' date}}
 *
 * @param {string} formatString Based on moment.js.
 * @param {string} localeString Language or language-country locale string available in https://github.com/moment/moment/tree/develop/locale .
 * @param {Date} date
 * @returns {string}
 */
export function formatLocaleDate(formatString, localeString, date) {
  let moment = global.moment;

  if (!moment) {
    moment = require('moment');
  }

  formatString = isString(formatString) ? formatString : '';

  if (isString(localeString)) {
    moment.locale(localeString);
  }

  return moment(date || new Date()).format(formatString);
}
