/* eslint-disable no-undef */
import supertest from 'supertest';

import app from '../app';
import buildModel from '../database/build';
// import buildSeed from '../database/seed';

jest.setTimeout(20000);

beforeAll(() => buildModel());

describe('Testing the statistics router', () => {
  test('Should return 200 status when the user is logged in', (done) => {
    supertest(app)
      .get('/api/v1/class/7/statistics')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) done(err);
        expect(res.statusCode).toBe(200);
        expect(typeof res.body).toBe('object');
        done();
      });
  });

  test('Should return 200 status when the user is logged in', (done) => {
    supertest(app)
      .get('/api/v1/class/12/statistics')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        expect(typeof Number(res.body.data.submitted[0].count)).toBe('number');
        done();
      });
  });

  test('Should return 200 status when the user is logged in', (done) => {
    supertest(app)
      .get('/api/v1/class/12/statistics')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        expect(typeof Number(res.body.data.notSubmitted[0].count)).toBe('number');
        done();
      });
  });
});
