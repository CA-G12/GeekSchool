/* eslint-disable no-undef */
import supertest from 'supertest';
import sequelize from '../database/connection';

import app from '../app';
import buildModel from '../database/build';

jest.setTimeout(20000);

beforeAll(() => buildModel());
afterAll(() => sequelize.close());

describe('Testing the statistics router', () => {
  test('dummy test', () => {
    expect(1).toBe(1);
  });

  test('Should return all parents students', (done) => {
    supertest(app)
      .get('/api/v1/profile/parent/7/students')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEiLCJyb2xlIjoicGFyZW50IiwiaWF0IjoxNjY2ODU2OTg5fQ.zRPQHH51kwdsFlF4wDZP1kT7RCRmchw4YtflOFCWtYc',
      ])
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        expect(res.body.msg).toBe('getting all student successfully');
        return done();
      });
  });

  test('Should return 401 because the token is invalid', (done) => {
    supertest(app)
      .get('/api/v1/profile/parent/7/students')
      .expect('Content-Type', /json/)
      .expect(401)
      .end((err, res) => {
        if (err) done(err);
        expect(res.body.msg).toBe('Unauthenticated');
        return done();
      });
  });
});
