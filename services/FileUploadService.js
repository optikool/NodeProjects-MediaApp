'use strict';

const express = require('express');
const request = require('superagent');

const router = express.Router();

module.exports = class FileUploadService {
    static uploadFile(req, res, next) {
        let file = req.files['fupload'];

        if (!req.checkBody('file', 'Invalid image type.').isImage(file.mimetype)) {
            res.status(400).json({ data: { name: 'error', message: `Invalid Image Type: ${file.mimetype}!` } });
        } else {
            const options = {
                hostname: 'localhost',
                port: 3010,
                path: '/service/upload/',
                method: 'POST',
            };

            request
                .post(`http://${options.hostname}:${options.port}${options.path}`)
                .attach('fupload', file.data, file.name)
                .end(function (err, response) {
                    if (err) {
                        res.json({ data: { name: 'error', message: `problem with request: ${err.message}` } })
                    } else {
                        res.status(response.statusCode).json({
                            data: {
                                name: 'success',
                                message: response.body.data.message
                            }
                        });
                    }
                });
        }
    }
}