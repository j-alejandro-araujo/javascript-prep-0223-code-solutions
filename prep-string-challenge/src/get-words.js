/* exported getWords */

function getWords(string) {
  if (!string.trim()) {
    return [];
  }
  const splitString = string.split(' ');
  return splitString;
}
