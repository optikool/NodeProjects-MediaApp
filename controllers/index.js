'use strict';

const express = require('express');
const router = express.Router();

router.use('/service/weather', new require('./WeatherController'));
router.use('/service/upload', new require('./FileUpload'));

router.get('/', (req, res) => {
    res.send('Move along. Nothing to see here...');
});

router.get('/weather', (req, res) => {
    let date = Date();
    res.send(`It is night time and cold outside. ${date}`);
});

module.exports = router;