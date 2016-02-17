
import * as helpers from './helpers.js';
import {isDefined, isObject} from './util/utils.js';

class H {
    static registerHelpers() {
        var handlebars;

        if (isDefined(window.Handlebars)) {
            handlebars = window.Handlebars;
        } else {
            throw new Error('Handlebars not loaded');
        }

        for (let name in helpers) {
            handlebars.registerHelper(name, helpers[name]);
        }
    }
}

if (isObject(window)) {
    window.H = H;
}

export default H;
