'use strict';

var $ = require('jquery');

const dateSet = {};

dateSet.getChosenDate = function(dateCounter) {
	return new Promise(function(resolve, reject) {
		let newDate = new Date();
		newDate.setDate(newDate.getDate() - dateCounter);
		let	currentDay = setNumberToTwoDigits(newDate.getDate()),
			currentMonth = setNumberToTwoDigits(newDate.getMonth() + 1),
			currentYear = newDate.getFullYear();
		resolve(`${currentYear}-${currentMonth}-${currentDay}`);
	});
};

function setNumberToTwoDigits(number) {
   return (number < 10 ? "0" : "") + number;
}

module.exports = dateSet;