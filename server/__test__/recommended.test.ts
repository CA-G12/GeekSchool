/* eslint-disable no-undef */
// import supertest from 'supertest';

// import buildSeed from '../database/seed';
// import app from '../app';

jest.setTimeout(20000);

describe('dummy test', () => {
  test('2 + 2 should be 4', () => {
    expect(2 + 2).toBe(4);
  });
});

// describe('Testing get recommended route', () => {
//   test('check recommended', (done) => {
//     supertest(app)
//       .get('/api/v1/class/1/recommended')
//       .expect(401)
//       .end((err) => {
//         if (err) return done(err);
//         return done();
//       });
//   });
// });
