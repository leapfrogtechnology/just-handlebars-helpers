
import html from '../../src/helpers/html';

describe('html', () => {

    /* showIf */
    it('showIf should return empty if param is false', () => {
        expect(html.showIf(false)).toEqual('hidden');
    });

    it('showIf should return hidden if param is true', () => {
        expect(html.showIf(true)).toEqual('');
    });

    it('showIf should return empty for a random param', () => {
        expect(html.showIf('random')).toEqual('');
    });

    /* hideIf */
    it('hideIf should return empty if param is false', () => {
        expect(html.hideIf(false)).toEqual('');
    });

    it('hideIf should return hidden if param is true', () => {
        expect(html.hideIf(true)).toEqual('hidden');
    });

    it('hideIf should return hidden for a random param', () => {
        expect(html.hideIf('random')).toEqual('hidden');
    });

    /* selectedIf */
    it('selectedIf should return empty if param is false', () => {
        expect(html.selectedIf(false)).toEqual('');
    });

    it('selectedIf should return hidden if param is true', () => {
        expect(html.selectedIf(true)).toEqual('selected');
    });

    it('selectedIf should return empty for a random param', () => {
        expect(html.selectedIf('random')).toEqual('selected');
    });

    /* checkedIf */
    it('checkedIf should return empty if param is false', () => {
        expect(html.checkedIf(false)).toEqual('');
    });

    it('checkedIf should return hidden if param is true', () => {
        expect(html.checkedIf(true)).toEqual('checked');
    });

    it('checkedIf should return empty for a random param', () => {
        expect(html.checkedIf('random')).toEqual('checked');
    });

});
