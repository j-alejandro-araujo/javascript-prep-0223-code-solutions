/* exported isVowel */

function isVowel(char) {
  const testVowel = /[aeiou]/i.test(char);
  return testVowel;
}
