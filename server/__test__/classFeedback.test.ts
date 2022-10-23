import supertest from 'supertest';
import { sequelize } from '../models';
import buildSeed from '../database/seed';
import app from '../app';

jest.setTimeout(20000);
beforeAll(() => buildSeed());
afterAll(() => sequelize.close());

describe('Testing class routes', () => {
  test('Should return the statusCode 200 when trying to get the feedback from the teacher when he is logged in', (done) => {
    supertest(app)
      .get('/api/v1/class/12/feedback')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEgU2FsZW0iLCJyb2xlIjoidGVhY2hlciIsImlhdCI6MTY2NjExNjM4NH0.sr7oT_2dHMdTWfBKZEC7pa4VOZnlN9vM9y8P1UnsTa8',
      ])
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toBeDefined();
        expect(res.body.data.count).toBe(1);
        return done();
      });
  });

  test('Should return the statusCode 200 when trying to get the feedback from the teacher when he is logged in', (done) => {
    supertest(app)
      .get('/api/v1/class/12/feedback')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEgU2FsZW0iLCJyb2xlIjoidGVhY2hlciIsImlhdCI6MTY2NjExNjM4NH0.sr7oT_2dHMdTWfBKZEC7pa4VOZnlN9vM9y8P1UnsTa8',
      ])
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toBeDefined();
        expect(Array.isArray(res.body.data.rows)).toBe(true);
        return done();
      });
  });

  test('Should return the array of rows data when trying to get the feedback from the teacher when he is logged in', (done) => {
    supertest(app)
      .get('/api/v1/class/12/feedback')
      .expect(401)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toBe('Unauthenticated');
        return done();
      });
  });
});
