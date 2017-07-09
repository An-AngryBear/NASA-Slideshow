'use strict';

var $ = require('jquery');

const domManager = {};

// removes current image and replaces it with a new image
domManager.stickInImageContainer = function(image) {
	$('#image-container').empty();
	$('#image-container').append(`<img src="${image}">`);
};

domManager.buttonDisableCheck = function(dateCounter) {
	if(dateCounter < 1) {
		$('#left-btn').prop("disabled", true);
	} else {
		$('#left-btn').prop("disabled", false);
	}
};

module.exports = domManager;