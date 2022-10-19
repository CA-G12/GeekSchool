/* eslint-disable no-undef */
import supertest from 'supertest';
import { sequelize } from '../models';
import buildSeed from '../database/seed';
import app from '../app';

jest.setTimeout(20000);
beforeAll(() => buildSeed());
afterAll(() => sequelize.close());

describe('Testing adding new feedback route', () => {
  test('Test the success path: the feedback should be created when the user is a student and he is logged in!', (done) => {
    supertest(app)
      .post('/api/v1/class/25/feedback/add')
      .send({ studentId: 44, feedback: 'hello ppl!' })
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic3R1ZGVudCIsIm5hbWUiOiJKb2huIERvZSIsImlkIjoxNTE2MjM5MDIyfQ.ivV7KczMBPLI6JBiY7oAXlcfPuaTVNtd71aTrtgZa8A',
      ])
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.data).toBeDefined();
        return done();
      });
  });

  test('The test should return the same student id and class id that is given in the request!', (done) => {
    supertest(app)
      .post('/api/v1/class/25/feedback/add')
      .send({ studentId: 44, feedback: 'hello ppl!' })
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic3R1ZGVudCIsIm5hbWUiOiJKb2huIERvZSIsImlkIjoxNTE2MjM5MDIyfQ.ivV7KczMBPLI6JBiY7oAXlcfPuaTVNtd71aTrtgZa8A',
      ])
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.data.class_id).toBe(25);
        expect(res.body.data.student_id).toBe(44);
        return done();
      });
  });

  test('The test should return 401 code with unauthenticated message!', (done) => {
    supertest(app)
      .post('/api/v1/class/25/feedback/add')
      .send({ studentId: 44, feedback: 'hello ppl!' })
      .expect('Content-Type', /json/)
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toBe('Unauthenticated');
        return done();
      });
  });

  test('The test should return 400 with The data needed is not given! message when you he can not find body data', (done) => {
    supertest(app)
      .post('/api/v1/class/25/feedback/add')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic3R1ZGVudCIsIm5hbWUiOiJKb2huIERvZSIsImlkIjoxNTE2MjM5MDIyfQ.ivV7KczMBPLI6JBiY7oAXlcfPuaTVNtd71aTrtgZa8A',
      ])
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toBe('The data needed is not given!');
        return done();
      });
  });
});
