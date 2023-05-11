const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

const categoriesRouter = require('./app/api/v1/categories/router');

const notFoundMiddleware = require('./app/middlewares/not-found');
const handdleErrorMiddleware = require('./app/middlewares/handle-error');

const v1 = '/api/v1';

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get(v1, (req, res) => {
    res.status(200).json({
        message: 'Welcome to api semina',
    });
});

app.use(`${v1}/cms`, categoriesRouter);

// middleware
app.use(notFoundMiddleware);
app.use(handdleErrorMiddleware);

module.exports = app;
