// Utils
import { isObject } from './util/utils';

// Helpers
import * as html from './helpers/html';
import * as math from './helpers/math';
import * as strings from './helpers/strings';
import * as datetime from './helpers/datetime';
import * as formatters from './helpers/formatters';
import * as conditionals from './helpers/conditionals';

/**
 * Class for just-handlebars-helpers.
 */
class H {
  /**
   * Static method to register just-handlebars-helpers with Handlebars.
   *
   * @param {*} handlebars
   */
  static registerHelpers(handlebars) {

    handlebars = handlebars || global.Handlebars;

    if (!isObject(handlebars)) {
      // In case, handlebars is not provided and it's not available
      // in the global namespace as well throw the error and halt.
      throw new Error('Handlebars not loaded');
    }

    // Helpers list
    const helpers = [math, html, strings, conditionals, datetime, formatters];

    helpers.forEach(helper => {
      // Register all the helper functions to Handlebars
      for (const name in helper) {
        handlebars.registerHelper(name, helper[name]);
      }
    });
  }
}

export default H;
