const express = require('express');
const errorMiddleware = require('../middleware/error');
const categoriesRoute = require('../routes/categories');
const customersRoute = require('../routes/customers');
const coursesRoute = require('../routes/courses');
const entrollmentsRoute = require('../routes/enrollments');
const usersRoute = require('../routes/users');
const usersAuth = require('../routes/auth');

module.exports = function (app) {
    app.use(express.json());
    app.use('/api/v1/categories', categoriesRoute);
    app.use('/api/v1/customers', customersRoute);
    app.use('/api/v1/courses', coursesRoute);
    app.use('/api/v1/enrollments', entrollmentsRoute);
    app.use('/api/v1/users', usersRoute);
    app.use('/api/v1/auth', usersAuth);
    app.use(errorMiddleware);
}