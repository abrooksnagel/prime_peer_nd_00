/**
 * Created by abrooksnagel on 1/5/16.
 */
var randomizer = function(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min).toString();
};

module.exports = randomizer;
