/* eslint-disable no-undef */
import supertest from 'supertest';

import buildModel from '../database/build';
import app from '../app';

jest.setTimeout(20000);

beforeAll(async () => {
  await buildModel();
});

describe('Testing signup route', () => {
  test('dummy test', () => {
    expect(1).toBe(1);
  });

  test('Should create the student account', (done) => {
    supertest(app)
      .post('/api/v1/auth/signup')
      .send({
        name: 'Mustafa Salem',
        email: 'child1@gmail.com',
        password: 'root123',
        confPassword: 'root123',
        mobile: '0599000000',
        location: 'Gaza-Palestine',
        role: 'student',
      })
      .expect(201)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });

  test('Should create the student account', (done) => {
    supertest(app)
      .post('/api/v1/auth/signup')
      .send({
        name: 'Mustafa Salem',
        email: 'child2@gmail.com',
        password: 'root123',
        confPassword: 'root123',
        mobile: '0599000000',
        location: 'Gaza-Palestine',
        role: 'student',
      })
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toBe('Account is created successfully!');
        return done();
      });
  });

  test('Should create the teacher account', (done) => {
    supertest(app)
      .post('/api/v1/auth/signup')
      .send({
        name: 'Kamal Sameer',
        email: 'teacher@gmail.com',
        password: 'root123',
        confPassword: 'root123',
        mobile: '0599555555',
        location: 'Gaza-Palestine',
        role: 'teacher',
      })
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.msg).toBe('Account is created successfully!');
        return done();
      });
  });

  test('Should create the teacher account', (done) => {
    supertest(app)
      .post('/api/v1/auth/signup')
      .send({
        name: 'Kamal Sameer',
        email: 'teacher@gmail.com',
        password: 'root123',
        confPassword: 'root123',
        mobile: '0599555555',
        location: 'Gaza-Palestine',
        role: 'teacher',
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(422);
        expect(res.body.msg).toBe('The email does already exist!');
        return done();
      });
  });

  test('Should create the parent account and map children', (done) => {
    supertest(app)
      .post('/api/v1/auth/signup')
      .send({
        name: 'Issa Salem',
        email: 'parent@gmail.com',
        password: 'root123',
        confPassword: 'root123',
        mobile: '0599999999',
        location: 'Gaza-Palestine',
        role: 'parent',
        children: [
          'child1@gmail.com',
          'child2@gmail.com',
        ],
      })
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        console.log(res.body);
        expect(res.body.msg).toBe('Account is created successfully!');
        return done();
      });
  });
});

// test('Should not create the parent account because at least one
// student email nt exist', (done) => {
//   supertest(app)
//     .post('/api/v1/auth/signup')
//     .send({
//       name: 'Issa Salem',
//       email: 'parent2@gmail.com',
//       password: 'root123',
//       confPassword: 'root123',
//       mobile: '0599999999',
//       location: 'Gaza-Palestine',
//       role: 'parent',
//       children: [
//         'child10@gmail.com',
//         'child2@gmail.com',
//       ],
//     })
//     .expect(422)
//     .end((err, res) => {
//       if (err) return done(err);
//       expect(res.body.msg).toBe('The email does not exist!');
//       return done();
//     });
// });
