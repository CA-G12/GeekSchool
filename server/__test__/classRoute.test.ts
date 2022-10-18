/* eslint-disable no-undef */
import supertest from 'supertest';
import { sequelize } from '../models';
import buildSeed from '../database/seed';
import app from '../app';

jest.setTimeout(20000);
beforeAll(() => buildSeed());
afterAll(() => sequelize.close());

describe('Testing class routes', () => {
  // test('should return all announcement for a specific class', (done) => {
  //   supertest(app)
  //     .get('/api/v1/class/1/announcement')
  //     .expect(200)
  //     .expect('Content-Type', /json/)
  //     .end((err, res) => {
  //       if (err) return done(err);
  //       expect(res.body[0].id).toEqual(1);
  //       return done();
  //     });
  // });

  test('should return all announcement for a specific class', (done) => {
    supertest(app)
      .get('/api/v1/class/1/announcement')
      .expect(401)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual('Unauthenticated');
        return done();
      });
  });
});
