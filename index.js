'use strict';

var currencyPairs = require('./currency-pairs');
var prices = require('./prices');

module.exports = {
	currencyPairs: currencyPairs, //rx observable collection
	prices: prices //rx observable collection
};