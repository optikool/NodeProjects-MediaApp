'use strict';

const express = require('express');
const services = require('../services').FileUploadService;

const router = express.Router();

router.post('/', services.uploadFile);

module.exports = router;