
import Handlebars from 'handlebars';
import datetime from '../../src/helpers/datetime';

describe('datetime', () => {

    it('formatDate should return formattedDate(MM/DD/YYYY) even if date is not provided', () => {
        expect(datetime.formatDate('MM/DD/YYYY')).toMatch(/^\d{2}\/\d{2}\/\d{4}$/);
    });

    it('formatDate should return formattedDate(YYYY-MM-DD) even if date is not provided', () => {
        expect(datetime.formatDate('YYYY-MM-DD')).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });

    it('formatDate should return formattedDate(YYYY-MM-DD) even if date=null is provided', () => {
        expect(datetime.formatDate('YYYY-MM-DD', null)).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });

    it('formatDate should return formattedDate(YYYY-MM-DD) even if date=undefined is provided', () => {
        expect(datetime.formatDate('YYYY-MM-DD', undefined)).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });

    it('formatDate should return use the current Date if no date is provided', () => {
        let expected = datetime.formatDate('YYYY-MM-DD', new Date());

        expect(datetime.formatDate('YYYY-MM-DD')).toEqual(expected);
    });

    it('formatDate should return formatted Date if date is provided', () => {
        let actual = '01/02/2016';
        let expected = '2016-01-02';

        expect(datetime.formatDate('YYYY-MM-DD', new Date(actual))).toEqual(expected);
    });

    it('formatDate should still work and return the full timestamp if no parameters are provided', () => {
        expect(datetime.formatDate()).toMatch(/^\d{4}-\d{2}-\d{2}.+$/);
    });

    it('formatDate helper should work as expected after compilation', () => {
        let actual = '01/02/2016';
        let expected = '2016-01-02';
        let template = Handlebars.compile('{{formatDate "YYYY-MM-DD" date}}');

        expect(template({date: new Date(actual)})).toEqual(expected);
    });

    it('formatDate helper should work as expected after compilation with no parameters', () => {
        let template = Handlebars.compile('{{formatDate}}');

        expect(template()).toMatch(/^\d{4}-\d{2}-\d{2}.+$/);
    });

    it('formatDate helper after compilation should return the current Date if no date is provided', () => {
        let template = Handlebars.compile('{{formatDate "YYYY-MM-DD"}}');
        let expected = datetime.formatDate('YYYY-MM-DD', new Date());

        expect(datetime.formatDate('YYYY-MM-DD')).toEqual(expected);
    });

});
