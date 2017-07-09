'use strict';

var $ = require('jquery');

const spaceImages = require('./msg-grabber.js'),
	dateSetter = require('./date-setter.js'),
	domHandler = require('./dom-handler.js');

let dateCounter = -1;

function getImageBasedOnDate() {
	dateSetter.getChosenDate(dateCounter)
		.then(function(chosenDate) {
			return spaceImages.getImages(chosenDate);
		})
		.then(function(imageURL) {
			domHandler.stickInImageContainer(imageURL);
			console.log(dateCounter);
		});
}

$('#right-btn').on("click", function() {
	dateCounter++;
	getImageBasedOnDate();
	domHandler.buttonDisableCheck(dateCounter);
});


$('#left-btn').on("click", function() {
	if(dateCounter > 0) {
		dateCounter--;
		getImageBasedOnDate();
		domHandler.buttonDisableCheck(dateCounter);
	}
});

domHandler.buttonDisableCheck(dateCounter);