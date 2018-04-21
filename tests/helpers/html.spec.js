import '../misc';
import { compile } from 'handlebars';
import * as html from '../../src/helpers/html';

describe('html', () => {

  describe('showIf', () => {
    it('should return empty if param is false', () => {
      expect(html.showIf(false)).toEqual('hidden');
    });

    it('should return hidden if param is true', () => {
      expect(html.showIf(true)).toEqual('');
    });

    it('should return empty for a random param', () => {
      expect(html.showIf('random')).toEqual('');
    });

    it('helper should work as expected after compilation', () => {
      const template = compile('{{showIf boolean}}');

      expect(template({ boolean: false })).toEqual('hidden');
    });
  });

  describe('hideIf', () => {
    it('should return empty if param is false', () => {
      expect(html.hideIf(false)).toEqual('');
    });

    it('should return hidden if param is true', () => {
      expect(html.hideIf(true)).toEqual('hidden');
    });

    it('should return hidden for a random param', () => {
      expect(html.hideIf('random')).toEqual('hidden');
    });

    it('helper should work as expected after compilation', () => {
      const template = compile('{{hideIf boolean}}');

      expect(template({ boolean: false })).toEqual('');
    });
  });

  describe('selectedIf', () => {
    it('should return empty if param is false', () => {
      expect(html.selectedIf(false)).toEqual('');
    });

    it('should return hidden if param is true', () => {
      expect(html.selectedIf(true)).toEqual('selected');
    });

    it('should return empty for a random param', () => {
      expect(html.selectedIf('random')).toEqual('selected');
    });

    it('helper should work as expected after compilation', () => {
      const template = compile('{{selectedIf boolean}}');

      expect(template({ boolean: true })).toEqual('selected');
    });
  });

  describe('checkedIf', () => {
    it('should return empty if param is false', () => {
      expect(html.checkedIf(false)).toEqual('');
    });

    it('should return hidden if param is true', () => {
      expect(html.checkedIf(true)).toEqual('checked');
    });

    it('should return empty for a random param', () => {
      expect(html.checkedIf('random')).toEqual('checked');
    });

    it('helper should work as expected after compilation', () => {
      const template = compile('{{checkedIf boolean}}');

      expect(template({ boolean: true })).toEqual('checked');
    });
  });

  describe('options', () => {
    it('should return a list of <option> tags according to the data.', () => {
      const template = compile('{{{options data}}}');
      const data = [
        {
          id: 1,
          description: 'Foo'
        },
        {
          id: 2,
          description: 'Bar'
        },
        {
          id: 3,
          description: 'Foo Bar'
        }
      ];

      const html = [
        '<option value="1">Foo</option>',
        '<option value="2">Bar</option>',
        '<option value="3">Foo Bar</option>'
      ].join('\n');

      expect(template({ data })).toEqual(html);
    });

    it('should return a list of <option> tags along with selected value.', () => {
      const template = compile('{{{options data selected=sel}}}');
      const data = [
        {
          id: 1,
          description: 'Foo'
        },
        {
          id: 2,
          description: 'Bar'
        },
        {
          id: 3,
          description: 'Foo Bar'
        }
      ];

      const html = [
        '<option value="1">Foo</option>',
        '<option value="2" selected>Bar</option>',
        '<option value="3">Foo Bar</option>'
      ].join('\n');

      expect(template({ data, sel: '2' })).toEqual(html);
    });

    it('should allow overriding the default keys for the options.', () => {
      const template = compile('{{{options data selected="2" id="key" text="label"}}}');
      const data = [
        {
          key: 1,
          label: 'Foo'
        },
        {
          key: 2,
          label: 'Bar'
        },
        {
          key: 3,
          label: 'Foo Bar'
        }
      ];

      const html = [
        '<option value="1">Foo</option>',
        '<option value="2" selected>Bar</option>',
        '<option value="3">Foo Bar</option>'
      ].join('\n');

      expect(template({ data })).toEqual(html);
    });
  });
});
