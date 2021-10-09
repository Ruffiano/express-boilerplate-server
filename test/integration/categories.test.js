const request = require('supertest');
const { Category } = require('../../models/category');
const { User } = require('../../models/user');
const mongoose = require('mongoose');
let server;

describe('/api/categores', () => {
    beforeEach(() => {
        server = require('../../index');
    });

    afterEach(() => {
        server.close();
    });

    describe('GET /', () => {
        it('should return all categories', async () => {
            const response = await request(server)
                .get('/api/categories')
                .set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjk2OTM0YzNhZDU2ZmU2ZDAxMjdkNWMiLCJpYXQiOjE2MDM3MTA3MTN9.NawxaHAn0JPSPEZKG3H3bwYBXQGSJZ5tLIa1e4cQztQ')
            expect(response.status).toBe(200);
        });
    });

    describe('GET  /:id',  () => {
        // it('should return if valid id is given', async () => {
        //     const  category = new  Category({name:  'AIW  Class'})
        //     await category.save();
        //
        //     const response = await request(server)
        //         .get('/api/categories/' + category._id)
        //         .set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjk2OTM0YzNhZDU2ZmU2ZDAxMjdkNWMiLCJpYXQiOjE2MDM3MTA3MTN9.NawxaHAn0JPSPEZKG3H3bwYBXQGSJZ5tLIa1e4cQztQ')
        //     expect(response.status).toBe(200);
        //     expect(response.body).toHaveProperty('name', 'AIW  Class');
        // })

        it('should  return 404 if invalid id is given', async () => {
            const response = await request(server)
                .get('/api/categories/123')
                .set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjk2OTM0YzNhZDU2ZmU2ZDAxMjdkNWMiLCJpYXQiOjE2MDM3MTA3MTN9.NawxaHAn0JPSPEZKG3H3bwYBXQGSJZ5tLIa1e4cQztQ')
            expect(response.status).toBe(404)
        })

        it('should return 404 if no category withthe passed id exist', async () => {
            const categoryId = mongoose.Types.ObjectId();
            const response =  await request(server)
                .get('/api/categories/'+categoryId)
                .set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjk2OTM0YzNhZDU2ZmU2ZDAxMjdkNWMiLCJpYXQiOjE2MDM3MTA3MTN9.NawxaHAn0JPSPEZKG3H3bwYBXQGSJZ5tLIa1e4cQztQ')
            expect(response.status).toBe(404)
        })
    })

    describe('POST /', () => {
        let token;
        let name;

        // testlar uchun ishlatiladigan funktsiyani bu yerda oldindan
        // aniqlab olamiz va uni har bir test ichida alohida chaqiramiz
        const execute = async () => {
            return await request(server)
                .post('/api/categories')
                .set('x-auth-token', token)
                .send({ name });
        }

        beforeEach(() => {
            token = new User().generateAuthToken();
            name = 'Database';
        })

        it('should return 401 if user is not logged in', async () => {
            token = '';
            const res = await execute();
            expect(res.status).toBe(401);
        });

        it('should return 400 if category name is less than 3 characters', async () => {
            name = '12';
            const res = await execute();
            expect(res.status).toBe(400);
        });

        it('should return 400 if category name is more than 50 characters', async () => {
            name = new Array(52).join('c');
            const res = await execute();
            expect(res.status).toBe(400);
        });

        it('should save the category if it is valid', async () => {
            await execute();
            const category = await Category.find({ name: 'Database' });
            expect(category).not.toBeNull();
        });

        // it('should return the category if it is valid', async () => {
        //     const res = await execute();
        //     expect(res.body).toHaveProperty('_id');
        //     expect(res.body).toHaveProperty('name', 'Database');
        // });
    });
});