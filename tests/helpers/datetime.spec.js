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

    it('should return use the current date if no date is provided', () => {
      const expected = datetime.formatDate('YYYY-MM-DD', new Date());

      expect(datetime.formatDate('YYYY-MM-DD')).toEqual(expected);
    });

    it('should return formatted date if date is provided', () => {
      const actual = '01/02/2016';
      const expected = '2016-01-02';

      expect(datetime.formatDate('YYYY-MM-DD', new Date(actual))).toEqual(expected);
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

  describe('formatLocaleDate', () => {
    it('should return locale-formatted day of week (dddd) even if date is not provided', () => {
      const expectedDayOfWeek = datetime.formatLocaleDate('dddd', 'en', new Date());

      expect(datetime.formatLocaleDate('dddd')).toEqual(expectedDayOfWeek);
    });

    it('should return locale-formatted day of week (dddd) in different lang even if date is not provided', () => {
      const expectedDayOfWeek = datetime.formatLocaleDate('dddd', 'ku', new Date()); // ku = kurdish

      expect(datetime.formatLocaleDate('dddd', 'ku')).toEqual(expectedDayOfWeek);
    });

    it('should return locale-formatted date (dddd) even if locale=null is provided', () => {
      const expectedDayOfWeek = datetime.formatLocaleDate('dddd', 'en', new Date());

      expect(datetime.formatLocaleDate('dddd', null)).toEqual(expectedDayOfWeek);
    });


    it('should rreturn locale-formatted date (dddd) even if date=null and locale=null is provided', () => {
      const expectedDayOfWeek = datetime.formatLocaleDate('dddd', 'en', new Date());

      expect(datetime.formatLocaleDate('dddd', null, null)).toEqual(expectedDayOfWeek);
    });

    it('should return locale-formatted date (dddd) even if locale=undefined is provided', () => {
      const expectedDayOfWeek = datetime.formatLocaleDate('dddd', 'en', new Date());

      expect(datetime.formatLocaleDate('dddd', undefined)).toEqual(expectedDayOfWeek);
    });


    it('should rreturn locale-formatted date (dddd) even if date=undefined and locale=undefined is provided', () => {
      const expectedDayOfWeek = datetime.formatLocaleDate('dddd', 'en', new Date());

      expect(datetime.formatLocaleDate('dddd', undefined, undefined)).toEqual(expectedDayOfWeek);
    });

    it('should return use the current date if no date is provided', () => {
      const expected = datetime.formatLocaleDate('MMMM Do, YYYY', 'es', new Date());

      expect(datetime.formatLocaleDate('MMMM Do, YYYY', 'es')).toEqual(expected);
    });

    it('should return german locale-formatted date if date is provided and formatting requests german', () => {
      const actual = '01/02/2016';
      const expected = 'Samstag, 2. Januar 2016 00:00';

      expect(datetime.formatLocaleDate('LLLL', 'de', new Date(actual))).toEqual(expected);
    });

    it('should still work and return the full timestamp if no parameters are provided', () => {
      expect(datetime.formatLocaleDate()).toMatch(/^\d{4}-\d{2}-\d{2}.+$/);
    });

    it('helper after compilation should return the current Date if no date is provided', () => {
      const expected = datetime.formatLocaleDate('YYYY-MM-DD', new Date());

      expect(datetime.formatLocaleDate('YYYY-MM-DD')).toEqual(expected);
    });
  });

});
