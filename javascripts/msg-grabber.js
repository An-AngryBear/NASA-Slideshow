'use strict';

var $ = require('jquery');
const spaceImages = {};

spaceImages.getImages = function(date) {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: `https://api.nasa.gov/planetary/apod?date=${date}&api_key=E8Ka6jY0BKnJxS15BfLj1fRtFmKZ15sHh7mK1rpv`
		})
		.done(function(data) {
			console.log(data.hdurl);
			resolve(data.hdurl);
		})
		.fail(function(error) {
			console.log("error", error.statusText);
		});
	});
};

module.exports = spaceImages;