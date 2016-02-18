
import * as helpers from './helpers.js';

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

if (typeof window === 'object') {
    window.H = H;
}

export default H;
