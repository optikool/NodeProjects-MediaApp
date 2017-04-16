'use strict';

const express = require('express');
const http = require('http');
const FormData = require('form-data');

const router = express.Router();

router.post('/', (req, res, next) => {
    let file = req.files['fupload'];
    let form = new FormData();

    if(!req.checkBody('file', 'Invalid image type.').isImage(file.mimetype)) {
        res.status(400).json({ data: { name: 'error', message: `Invalid Image Type: ${file.mimetype}!` } });
    } else {
        const options = {
            hostname: 'localhost',
            port: 3010,
            path: '/service/upload/',
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data; boundary=' + form.getBoundary()
            }
        };

        form.append("fupload",
            file.data, { filename: file.name });

        const request = http.request(options, (response) => {
            console.log(`STATUS: ${response.statusCode}`);
            console.log(`HEADERS: ${JSON.stringify(response.headers)}`);
            let body = [];

            response.setEncoding('utf8');

            response.on('data', (chunk) => {
                console.log(`BODY: ${chunk}`);
                body.push(chunk);
            });

            response.on('end', () => {
                let d = JSON.parse(body.concat());

                res.status(response.statusCode).json({
                    data: { 
                        name: 'success', 
                        message: d.data.message
                    }
                });
            });
        });

        form.pipe(request);

        request.on('error', (e) => {
            // Todo: Find out why error is getting called on successful response
            // console.error(`problem with request: ${e}`);
            // res.json({ data: { name: 'error', message: `problem with request: ${e.message}` } })
        });

        request.write(JSON.stringify(form));
        request.end();
    }
});

module.exports = router;