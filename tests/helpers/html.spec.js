import {compile} from 'handlebars';
import html from '../../src/helpers/html';

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
            let template = compile('{{showIf boolean}}');

            expect(template({boolean: false})).toEqual('hidden');
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
            let template = compile('{{hideIf boolean}}');

            expect(template({boolean: false})).toEqual('');
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
            let template = compile('{{selectedIf boolean}}');

            expect(template({boolean: true})).toEqual('selected');
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
            let template = compile('{{checkedIf boolean}}');

            expect(template({boolean: true})).toEqual('checked');
        });
    });
});
