import * as html from './helpers/html';
import * as strings from './helpers/strings';
import * as conditionals from './helpers/conditionals';

class H {
    static registerHelpers(handlebars) {

        if (!handlebars && typeof global.Handlebars !== 'object') {
            // In case, handlebars is not provided and it's not available
            // in the global namespace as well throw the error and halt.
            throw new Error('Handlebars not loaded');
        }

        // Helpers list
        let helpers = [html, strings, conditionals];

        helpers.forEach(helper => {
            // Register all the helper functions to Handlebars
            for (let name in helper) {
                handlebars.registerHelper(name, helper[name]);
            }
        });
    }
}

export default H;
