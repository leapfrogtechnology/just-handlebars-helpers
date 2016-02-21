import H from '../src/H';
import handlebars from 'handlebars';

describe('H.registerHelpers', () => {

    it('check if handlebars helpers are registered from each module', () => {
        H.registerHelpers(handlebars);
        spyOn(handlebars.helpers, 'ifx');
        spyOn(handlebars.helpers, 'excerpt');
        spyOn(handlebars.helpers, 'checkedIf');
    });
    
});
