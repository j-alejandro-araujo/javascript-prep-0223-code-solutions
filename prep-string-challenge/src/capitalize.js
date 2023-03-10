/* exported capitalize */

function capitalize(word) {
  const capFirstLetter = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  return capFirstLetter;
}
