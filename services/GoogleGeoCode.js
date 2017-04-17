'use strict';

const express = require('express');
const moment = require('moment');
// const request = require('superagent');
const settings = require('../settings').RestAPISettings;

const service = express();

module.exports = class GoogleGeoCode {
	static getLocation() {
		service.get('/service/:location', (req, res, next) => {
			const urlGeocode = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + req.params.location + '&key=';
			// request.get(urlGeocode, (err, response) => {
			// 	if (err) {
			// 		console.log('Error in request.get');
			// 		console.log(err);
			// 		return res.sendStatus(500);
			// 	}

			// 	const location = response.body.results[0].geometry.location;
			// 	const timestamp = +moment().format('X');

			// 	const urlGeometryUrl = 'https://maps.googleapis.com/maps/api/timezone/json?';
			// 	const urlGeometryLocal = 'location=' + location.lat + ',' + location.lng;
			// 	const urlGeometryTime = '&timestamp=' + timestamp;
			// 	const urlGeometryKey = '&key=';
			// 	const urlGeometry = urlGeometryUrl + urlGeometryLocal + urlGeometryTime + urlGeometryKey;
			// 	console.log('Url for urlGeometry');
			// 	console.log(urlGeometry);
			// 	request.get(urlGeometry, (err, response) => {
			// 		if (err) {
			// 			console.log('Error occured getting Geometry');
			// 			console.log(err);
			// 			return res.sendStatus(500);
			// 		}

			// 		const result = response.body;
			// 		const timeString = moment.unix(timestamp + result.dstOffset + result.rawOffset).utc().format('dddd, MMMM Do YYYY, H:mm:ss a');
			// 		console.log('Time Stamp String:');
			// 		console.log(timeString);
			// 		res.json({ result: timeString });
			// 	});
			// });
		});
	}
};