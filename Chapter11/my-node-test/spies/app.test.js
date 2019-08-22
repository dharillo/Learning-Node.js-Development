const { describe, it } = require('mocha');
const expect = require('expect');
const jest = require('jest-mock');
const rewire = require('rewire');

const app = rewire('./app');

describe('App', () => {
  const db = {
    saveUser: jest.fn(),
  };
  // eslint-disable-next-line no-underscore-dangle
  app.__set__('db', db);

  describe('#handleSignup', () => {
    it('should call the spy correctly', () => {
      const spy = jest.fn();
      spy('Andrew', 25);
      expect(spy).toHaveBeenCalledWith('Andrew', 25);
    });

    it('should call saveUser with the user object', () => {
      const email = 'andrew@example.com';
      const password = '123abc';

      app.handleSignup(email, password);
      expect(db.saveUser).toHaveBeenCalledWith({ email, password });
    });
  });
});
