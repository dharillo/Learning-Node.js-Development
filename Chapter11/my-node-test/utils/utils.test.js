const { beforeEach, describe, it } = require('mocha');
const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
  describe('#add', () => {
    it('should add two numbers', () => {
      const res = utils.add(33, 11);
      expect(typeof res).toBe('number');
      expect(res).toBe(44);
    });
    it('should add when a is zero', () => {
      const res = utils.add(0, 11);
      expect(typeof res).toBe('number');
      expect(res).toBe(11);
    });
    it('should add when a is zero', () => {
      const res = utils.add(12, 0);
      expect(typeof res).toBe('number');
      expect(res).toBe(12);
    });
    it('should throw when a is NaN', () => {
      expect(() => utils.add(NaN, 10)).toThrowError();
    });
    it('should throw when b is NaN', () => {
      expect(() => utils.add(10, NaN)).toThrowError();
    });
    it('should throw when a is undefined', () => {
      expect(() => utils.add(undefined, 10)).toThrowError();
    });
    it('should throw when b is undefined', () => {
      expect(() => utils.add(10)).toThrowError();
    });
    it('should throw when a is null', () => {
      expect(() => utils.add(null, 10)).toThrowError();
    });
    it('should throw when b is null', () => {
      expect(() => utils.add(10, null)).toThrowError();
    });
    it('should throw when a is string', () => {
      expect(() => utils.add(null, '10')).toThrowError();
    });
    it('should throw when b is string', () => {
      expect(() => utils.add('10', null)).toThrowError();
    });
  });

  describe('#addAsync', () => {
    it('should add two numbers', (done) => {
      utils.addAsync(3, 4).then((result) => {
        expect(result).toBe(7);
        done();
      }).catch(done);
    });
    it('should throw when a is null', (done) => {
      utils.addAsync(null, 4).then(() => {
        done(new Error('Should not resolve'));
      }).catch(() => {
        done();
      });
    });
  });

  describe('#square', () => {
    it('should square a number', () => {
      const res = utils.square(11);
      expect(typeof res).toBe('number');
      expect(res).toBe(121);
    });
  });

  describe('#setName', () => {
    const baseUser = { age: 32, location: 'Sevilla' };
    let user;
    beforeEach(() => {
      user = { ...baseUser };
    });
    it('should store the names in the given object', () => {
      const res = utils.setName(user, 'David Harillo');

      expect(user).toEqual(res);
    });
    it('should set firstName and lastName', () => {
      const res = utils.setName(user, 'David Harillo');

      expect(res.firstName).toBe('David');
      expect(res.lastName).toBe('Harillo');
    });
    it('should not set lastName if fullName is only a word', () => {
      const res = utils.setName(user, 'David');

      expect(res.firstName).toBe('David');
      expect(res.lastName).toBeUndefined();
    });
  });
});
