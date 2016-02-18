
import * as helpers from './helpers.js';
import {isObject} from './util/utils.js';

class H {
    static registerHelpers(handlebars = window.Handlebars) {

        if (!handlebars) {
            throw new Error('Handlebars not loaded');
        }

        // Register all the helper functions to Handlebars
        for (let name in helpers) {
            handlebars.registerHelper(name, helpers[name]);
        }
    }
}

if (isObject(window)) {
    window.H = H;
}

export default H;
