import '../misc';
import { compile } from 'handlebars';
import * as datetime from '../../src/helpers/datetime';

describe('datetime', () => {

  describe('formatDate', () => {
    it('should return formatted date (MM/DD/YYYY) even if date is not provided', () => {
      expect(datetime.formatDate('MM/DD/YYYY')).toMatch(/^\d{2}\/\d{2}\/\d{4}$/);
    });

    it('should return formatted date (YYYY-MM-DD) even if date is not provided', () => {
      expect(datetime.formatDate('YYYY-MM-DD')).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });

    it('should return formatted date (YYYY-MM-DD) even if date=null is provided', () => {
      expect(datetime.formatDate('YYYY-MM-DD', null)).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });

    it('should return formatted date (YYYY-MM-DD) even if date=undefined is provided', () => {
      expect(datetime.formatDate('YYYY-MM-DD', undefined)).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });

    it('should return formatted date (YYYY-MM-DD) even if localeString=null is provided', () => {
      expect(datetime.formatDate('YYYY-MM-DD', new Date(), null)).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });

    it('should return formatted date (YYYY-MM-DD) even if localeString=undefined is provided', () => {
      expect(datetime.formatDate('YYYY-MM-DD', new Date(), undefined)).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });

    it('should return the current date if no date is provided', () => {
      const expected = datetime.formatDate('YYYY-MM-DD', new Date());

      expect(datetime.formatDate('YYYY-MM-DD')).toEqual(expected);
    });

    it('should return the localized current date if date=null is provided', () => {
      const expected = datetime.formatDate('MMMM Do, YYYY', new Date(), 'es');

      expect(datetime.formatDate('MMMM Do, YYYY', null, 'es')).toEqual(expected);
    });

    it('should return the localized current date if date=undefined is provided', () => {
      const expected = datetime.formatDate('MMMM Do, YYYY', new Date(), 'es');

      expect(datetime.formatDate('MMMM Do, YYYY', undefined, 'es')).toEqual(expected);
    });

    it('should return formatted date if date is provided', () => {
      const actual = '01/02/2016';
      const expected = '2016-01-02';

      expect(datetime.formatDate('YYYY-MM-DD', new Date(actual))).toEqual(expected);
    });

    it('should return formatted date in specific locale if date and locale are provided', () => {
      const actual = '01/02/2016';
      const expected = 'janvier 2, 2016';

      expect(datetime.formatDate('MMMM Do, YYYY', new Date(actual), 'fr')).toEqual(expected);
    });

    it('should return formatted date in multiple specific locales without changing global moment.js', () => {
      const actual = '01/02/2016';
      const expectedMn = 'Нэгдүгээр сар 2 өдөр, 2016';
      const expectedFr = 'janvier 2, 2016';
      const expectedEn = 'January 2nd, 2016';

      expect(datetime.formatDate('MMMM Do, YYYY', new Date(actual), 'mn')).toEqual(expectedMn);
      expect(datetime.formatDate('MMMM Do, YYYY', new Date(actual), 'fr')).toEqual(expectedFr);
      expect(datetime.formatDate('MMMM Do, YYYY', new Date(actual))).toEqual(expectedEn);
    });

    it('should still work and return the full timestamp if no parameters are provided', () => {
      expect(datetime.formatDate()).toMatch(/^\d{4}-\d{2}-\d{2}.+$/);
    });

    it('helper should work as expected after compilation', () => {
      const actual = '01/02/2016';
      const expected = '2016-01-02';
      const template = compile('{{formatDate "YYYY-MM-DD" date}}');

      expect(template({
        date: new Date(actual)
      })).toEqual(expected);
    });

    it('helper should work as expected after compilation with no parameters', () => {
      const template = compile('{{formatDate}}');

      expect(template()).toMatch(/^\d{4}-\d{2}-\d{2}.+$/);
    });

    it('helper after compilation should return the current Date if no date is provided', () => {
      const expected = datetime.formatDate('YYYY-MM-DD', new Date());

      expect(datetime.formatDate('YYYY-MM-DD')).toEqual(expected);
    });
  });

  describe('setDateLocale', () => {
    it('should return the global moment locale if no parameters are provided', () => {
      expect(datetime.setDateLocale()).toEqual('en');
    });

    it('should return an empty string if the provided localeString is not a string and noOutput=true', () => {
      expect(datetime.setDateLocale(null, true)).toEqual('');
      expect(datetime.setDateLocale(undefined, true)).toEqual('');
      expect(datetime.setDateLocale(new Object(), true)).toEqual('');
    });

    it('should return the input locale string if the locale change is successful and noOutput is not set', () => {
      const actual = '2017-06-04T00:00:00';
      const expected = 'domenica 4 giugno 2017 00:00';
      const italianLocale = 'it';

      // reset global locale
      expect(datetime.setDateLocale(true)).toEqual('en');

      expect(datetime.setDateLocale(italianLocale)).toEqual(italianLocale);

      expect(datetime.formatDate('LLLL', new Date(actual))).toEqual(expected);
    });

    it('should not return the input locale string if the locale change is successful and noOutput=true', () => {
      const actual = '2017-06-04T00:00:00';
      const expected = 'domenica 4 giugno 2017 00:00';
      const italianLocale = 'it';

      // reset global locale
      expect(datetime.setDateLocale(true)).toEqual('en');

      expect(datetime.setDateLocale(italianLocale, true)).toEqual('');

      expect(datetime.formatDate('LLLL', new Date(actual))).toEqual(expected);
    });

    it('should return the input locale string if the locale change is successful and not affect formatDate with locale specified', () => {
      const actual = '2017-06-04T00:00:00';
      const expectedEnglish = 'Sunday, June 4, 2017 12:00 AM';
      const expectedItalian = 'domenica 4 giugno 2017 00:00';
      const expectedPolish = 'niedziela, 4 czerwca 2017 00:00';
      const italianLocale = 'it';
      const polishLocale = 'pl';

      // reset global locale
      expect(datetime.setDateLocale(true)).toEqual('en');
      // baseline with English
      expect(datetime.formatDate('LLLL', new Date(actual))).toEqual(expectedEnglish);

      expect(datetime.setDateLocale(italianLocale, true)).toEqual('');

      expect(datetime.formatDate('LLLL', new Date(actual))).toEqual(expectedItalian);
      expect(datetime.formatDate('LLLL', new Date(actual), polishLocale)).toEqual(expectedPolish);
    });
  });

});
