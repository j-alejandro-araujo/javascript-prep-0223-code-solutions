const number1 = 3;
const number2 = 8;
const product = (number1 * number2);
console.log(product);
console.log(typeof product);

const charge = 5;
const payment = 2;
const amountRemaining = (payment - charge);
console.log(amountRemaining);
console.log(typeof amountRemaining);

const tests = 2;
const assignments = 4;
const final = 6;
const grade = (tests + assignments + final) / 3;
console.log(grade);
console.log(typeof grade);

const firstName = 'Jesus';
const lastName = 'Araujo';
const fullName = `${firstName} ${lastName}`;
console.log(fullName);
console.log(typeof fullName);

const pH = 12;
const isAcidic = (pH < 7);
console.log(isAcidic);
console.log(typeof isAcidic);

const numberOfSoldiers = 125;
const isSparta = (numberOfSoldiers === 300);
console.log(isSparta);
console.log(typeof isSparta);

let nickName = fullName;
nickName += `${' is the GOAT'}`;
console.log(nickName);
console.log(typeof nickName);
