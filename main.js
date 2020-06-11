/*******************
 * YOUR CODE HERE! *
 *******************/

function yell(exclaim) {
  return exclaim + "!";
}

function getFirstCharacter(begin) {
  return begin[0];
}

function getLastCharacter(end) {
  return end[end.length - 1];
}

function getOneCharacter(single, x) {
  return single[single.length = x];
}

function getTwoCharacters(double, y, z) {
  return double[double.length = y] + double[double.length = z];
}

function makeCapitalized(bigWords) {
  return bigWords.toUpperCase(bigWords);
}

function yellLouder(scream) {
  return scream.toUpperCase(scream) + "!!!";
}

function getInitials(name) {
  return name[name.length = 0] + "." + name[name.indexOf(" ") + 1] + ".";
}

/********************************************************************
 * THIS CODE IS FOR INTERNAL USE ONLY. DON'T CHANGE ANYTHING BELOW! *
 ********************************************************************/

if (typeof yell === 'undefined') {
  yell = undefined;
}

if (typeof getFirstCharacter === 'undefined') {
  getFirstCharacter = undefined;
}

if (typeof getLastCharacter === 'undefined') {
  getLastCharacter = undefined;
}

if (typeof getOneCharacter === 'undefined') {
  getOneCharacter = undefined;
}

if (typeof getTwoCharacters === 'undefined') {
  getTwoCharacters = undefined;
}

if (typeof makeCapitalized === 'undefined') {
  makeCapitalized = undefined;
}

if (typeof yellLouder === 'undefined') {
  yellLouder = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}


module.exports = {
  yell,
  getFirstCharacter,
  getLastCharacter,
  getOneCharacter,
  getTwoCharacters,
  makeCapitalized,
  yellLouder,
  getInitials,
};
