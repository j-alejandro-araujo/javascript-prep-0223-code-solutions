/* exported head */

// head(array)
function head(array) {
  const firstElement = array[0];
  return firstElement;
} head();

// last(array)
function last(array) {
  const lastElement = array[array.length - 1];
  return lastElement;
} last();

// tail(array)
function tail(array) {
  const afterFirstElement = [];
  for (let i = 1; i < array.length; i++) {
    afterFirstElement.push(array[i]);
  }
  return afterFirstElement;
} tail();

// initial(array)
function initial(array) {
  const allButLastElement = [];
  for (let i = 0; i < array.length - 1; i++) {
    allButLastElement.push(array[i]);
  }
  return allButLastElement;
} initial();

// reverse(Array)
function reverse(array) {
  const reverseOrder = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reverseOrder.push(array[i]);
  }
  return reverseOrder;
} reverse();

// compact(array)
function compact(array) {
  const compactElements = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      compactElements.push(array[i]);
    }
  }
  return compactElements;
} compact();
