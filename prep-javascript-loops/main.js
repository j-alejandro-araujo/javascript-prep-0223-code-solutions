// While Loop 1
function whileLoop1() {
  const array = [];
  let i = 0;
  while (i < 10) {
    array.push(i);
    i++;
  }
  return array;
}
console.log('whileLoop1 Output', whileLoop1());

// While Loop 2
function whileLoop2() {
  const array = [];
  let i = 0;
  while (i <= 18) {
    array.push(i);
    i += 2;
  }
  return array;
}
console.log('whileLoop2 Output', whileLoop2());

// For Loop 1
function forLoop1() {
  const array = [];
  for (let i = 0; i < 10; i++) {
    array.push(i);
  }
  return array;
}
console.log('forLoop1 Output', forLoop1());

// For Loop 2
function forLoop2() {
  for (let i = 100; i >= 0; i--) {
    console.log('Time till explosion: ' + i + '!');
  }
}
forLoop2();

// For in Loop 1
function forInLoop1(object) {
  const array = [];
  for (const x in object) {
    array.push(x);

  }
  return array;
}
const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine'
};
console.log('forInLoop1 Output', forInLoop1(object));

// For in Loop 2
function forInLoop2(object) {
  const array = [];
  for (const x in object) {
    array.push(object[x]);
  }
  return array;
}
console.log('forInLoop2 Output', forInLoop2(object));
