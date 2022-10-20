import supertest from 'supertest';
import { sequelize } from '../models';
import buildSeed from '../database/seed';
import app from '../app';

jest.setTimeout(20000);
beforeAll(() => buildSeed());
afterAll(() => sequelize.close());

describe('Testing get assignments route', () => {
  test('should not return assignments because this student not auth (there is no student_id)', (done) => {
    supertest(app)
      .get('/api/v1/class/1/assignments/')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic3R1ZGVudCIsIm5hbWUiOiJKb2huIERvZSIsImlkIjoxNTE2MjM5MDIyfQ.ivV7KczMBPLI6JBiY7oAXlcfPuaTVNtd71aTrtgZa8A',
      ])
      .expect(401)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual('Unauthenticated');
        return done();
      });
  });

  test('should return all assignments for a specific class for this student', (done) => {
    supertest(app)
      .get('/api/v1/class/1/assignments/1')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic3R1ZGVudCIsIm5hbWUiOiJKb2huIERvZSIsImlkIjoxNTE2MjM5MDIyfQ.ivV7KczMBPLI6JBiY7oAXlcfPuaTVNtd71aTrtgZa8A',
      ])
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.data[0].id).toEqual(1);
        return done();
      });
  });

  test('should return all assignments for a specific class for this teacher', (done) => {
    supertest(app)
      .get('/api/v1/class/1/assignments/1')
      .set('Cookie', [
        'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11c3RhZmEgU2FsZW0iLCJyb2xlIjoidGVhY2hlciIsImlhdCI6MTY2NjExNjM4NH0.sr7oT_2dHMdTWfBKZEC7pa4VOZnlN9vM9y8P1UnsTa8',
      ])
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual('Teacher Assignments  for this class');
        return done();
      });
  });

  test('should not return assignments because this is not auth', (done) => {
    supertest(app)
      .get('/api/v1/class/1/assignments/1')
      .expect(401)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toEqual('Unauthenticated');
        return done();
      });
  });
});
