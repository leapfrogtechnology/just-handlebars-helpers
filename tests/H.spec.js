
import './misc';
import H from '../src/H';
import Handlebars from 'handlebars';

describe('H.registerHelpers', () => {

  it('check if handlebars is sent through as an argument to register helpers', () => {
    expect(H.registerHelpers).toThrow(new Error('Handlebars not loaded'));
  });

  it('check if handlebars helpers are registered from each module', () => {
    H.registerHelpers(Handlebars);
    spyOn(Handlebars.helpers, 'ifx');
    spyOn(Handlebars.helpers, 'excerpt');
    spyOn(Handlebars.helpers, 'checkedIf');
  });
});
