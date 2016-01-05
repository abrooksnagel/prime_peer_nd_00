/**
 * Created by abrooksnagel on 1/5/16.
 */
var randomNumber = require('./randomNumber');
var makeDollars = require('./makeDollars');

var firstPassedInSecond = function(min, max) {
    return makeDollars(randomNumber(min, max));
};

var accountCall = function() {
    return ("Account Balance: \n");
};

exports.firstInSecond = firstPassedInSecond;
exports.accountBalance = accountCall;
