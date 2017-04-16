'use strict';

const express = require('express');
const router = express.Router();

router.get('/all', (req, res) => {
    res.send('The weather today is sunny');
});

module.exports = router;

