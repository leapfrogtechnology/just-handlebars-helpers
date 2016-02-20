import * as html from './helpers/html';
import * as math from './helpers/math';
import * as strings from './helpers/strings';

class H {
    static registerHelpers(handlebars = window.Handlebars) {

        if (!handlebars) {
            throw new Error('Handlebars not loaded');
        }

        // Helpers list
        let helpers = [html, math, strings];

        helpers.forEach(helper => {
            // Register all the helper functions to Handlebars
            for (let name in helper) {
                handlebars.registerHelper(name, helper[name]);
            }
        });
    }
}

if (typeof window === 'object') {
    window.H = H;
}

export default H;
