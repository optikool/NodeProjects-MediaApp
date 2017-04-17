'use strict';

const express = require('express');
const http = require('http');
const FormData = require('form-data');
const services = require('../services').FileUploadService;

const router = express.Router();

router.post('/', services.uploadFile);

module.exports = router;