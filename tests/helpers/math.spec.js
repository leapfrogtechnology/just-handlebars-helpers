import '../misc';
import { compile } from 'handlebars';
import * as math from '../../src/helpers/math';

describe('math', () => {
  describe('sum', () => {
    it('should return the sum of two passed values', () => {
      expect(math.sum(5, 6)).toEqual(11);
    });

    it('helper should return the sum of two passed values', () => {
      const template = compile('{{sum value 5}}');

      expect(template({ value: 6 })).toEqual('11');
    });

    it('helper should also work with floats', () => {
      const template = compile('{{sum value 5.1}}');

      expect(template({ value: 6.7 })).toEqual('11.8');
    });
  });

  describe('difference', () => {
    it('should return the difference of two passed values', () => {
      expect(math.difference(5, 6)).toEqual(-1);
    });

    it('helper should return the difference of two passed values', () => {
      const template = compile('{{difference value 5}}');

      expect(template({ value: 6 })).toEqual('1');
    });

    it('helper should also work with floats', () => {
      const template = compile('{{difference value 1.2}}');

      expect(template({ value: 6.5 })).toEqual('5.3');
    });
  });

  describe('multiplication', () => {
    it('should return the multiplication of two passed values', () => {
      expect(math.multiplication(5, 6)).toEqual(30);
    });

    it('helper should return the multiplication of two passed values', () => {
      const template = compile('{{multiplication value 5}}');

      expect(template({ value: 6 })).toEqual('30');
    });

    it('helper should also work with floats', () => {
      const template = compile('{{multiplication value 5.2}}');

      expect(template({ value: 6.4 })).toEqual('33.28');
    });
  });

  describe('division', () => {
    it('should return the division of two passed values', () => {
      expect(math.division(4, 2)).toEqual(2);
    });

    it('helper should return the division of two passed values', () => {
      const template = compile('{{division value 2}}');

      expect(template({ value: 4 })).toEqual('2');
    });

    it('helper should also work with floats', () => {
      const template = compile('{{division value 1.6}}');

      expect(template({ value: 5.2 })).toEqual('3.25');
    });
  });

  describe('remainder', () => {
    it('should return the remainder of two passed values', () => {
      expect(math.remainder(5, 3)).toEqual(2);
    });

    it('helper should return the remainder of two passed values', () => {
      const template = compile('{{remainder value 3}}');

      expect(template({ value: 5 })).toEqual('2');
    });

    it('helper should also work with floats', () => {
      const template = compile('{{remainder value 2.5}}');

      expect(template({ value: 5.2 })).toEqual('0.20000000000000018');
    });
  });

  describe('ceil', () => {
    it('should return the ceil value of a float number', () => {
      expect(math.ceil(5.666)).toEqual(6);
    });

    it('helper should also return the ceil value of a float number', () => {
      const template = compile('{{ceil value}}');

      expect(template({ value: '5.666' })).toEqual('6');
    });
  });

  describe('floor', () => {
    it('should return the floor value of a float number', () => {
      expect(math.floor(5.666)).toEqual(5);
    });

    it('helper should also return the floor value of a float number', () => {
      const template = compile('{{floor value}}');

      expect(template({ value: '5.666' })).toEqual('5');
    });
  });

  describe('abs', () => {
    it('should return the absolute value of a float number', () => {
      expect(math.abs(-5.666)).toEqual(5.666);
      expect(math.abs(+5.666)).toEqual(5.666);
    });

    it('helper should return the absolute value of a positive float number', () => {
      const template = compile('{{abs value}}');

      expect(template({ value: '+5.666' })).toEqual('5.666');
    });

    it('helper should return the absolute value of a negative float number', () => {
      const template = compile('{{abs value}}');

      expect(template({ value: '-5.666' })).toEqual('5.666');
    });
  });
});
