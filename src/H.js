
// Utils
import {isObject} from './util/utils';

// Helpers
import html from './helpers/html';
import math from './helpers/math';
import strings from './helpers/strings';
import datetime from './helpers/datetime';
import conditionals from './helpers/conditionals';

class H {

    static registerHelpers(handlebars) {

        handlebars = handlebars || global.Handlebars;

        if (!isObject(handlebars)) {
            // In case, handlebars is not provided and it's not available
            // in the global namespace as well throw the error and halt.
            throw new Error('Handlebars not loaded');
        }

        // Helpers list
        let helpers = [math, html, strings, conditionals, datetime];

        helpers.forEach(helper => {
            // Register all the helper functions to Handlebars
            for (let name in helper) {
                handlebars.registerHelper(name, helper[name]);
            }
        });
    }
}

export default H;
