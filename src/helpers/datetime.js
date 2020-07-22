import { isString, isBoolean } from '../util/utils';

/**
 * A formatDate helper to format date using moment js with optional locale designation.
 *
 * @example
 *      {{formatDate 'MM/DD/YYYY' date 'es'}}
 *
 * @param {string} formatString Based on moment.js.
 * @param {Date} date
 * @param {string} localeString Language or language-country locale string available in https://github.com/moment/moment/tree/develop/locale .
 * @returns {string}
 */
export function formatDate(formatString, date, localeString) {
  let moment = global.moment;

  if (!moment) {
    moment = require('moment/min/moment-with-locales');
  }

  formatString = isString(formatString) ? formatString : '';

  if (isString(localeString)) {
    const localeMoment = moment(date || new Date());

    localeMoment.locale(localeString);

    return localeMoment.format(formatString);
  } else {
    // use global moment and format with default locale
    return moment(date || new Date()).format(formatString);
  }
}

/**
 * A setDateLocale helper to configure/read the current default moment js locale.
 *
 * @example
 *      {{setDateLocale 'es' true}}
 *
 * @param {string} localeString Language or language-country locale string available in https://github.com/moment/moment/tree/develop/locale .
 * @param {boolean} noOutput Boolean that causes the helper to return an empty string if TRUE.
 * @returns {string} The current global locale setting.
 */
export function setDateLocale(localeString, noOutput) {
  let moment = global.moment;

  if (!moment) {
    moment = require('moment/min/moment-with-locales');
  }

  let output = moment.locale();

  if (isBoolean(localeString) && localeString === true) {
    // according to moment's tests, english should be default: https://github.com/moment/moment/blob/develop/src/lib/locale/en.js
    output = moment.locale('en');
  } else if (isString(localeString) && output !== localeString) {
    output = moment.locale(localeString);
  }

  return noOutput ? '' : output;
}
