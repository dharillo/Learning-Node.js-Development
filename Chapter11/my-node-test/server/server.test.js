const request = require('supertest');
const { describe, it } = require('mocha');
const expect = require('expect');

const { app } = require('./server');

describe('Server', () => {
  describe('GET /', () => {
    it('should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body.error).toBe('Page not found');
          expect(res.body.name).toBe('Todo App v1.0');
        })
        .end(done);
    });
  });

  describe('GET /users', () => {
    it('should return my user object', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toContainEqual({
            name: 'Andrew',
            age: 25,
          });
        })
        .end(done);
    });
  });
});
