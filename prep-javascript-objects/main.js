const person = {
  firstName: 'John',
  lastName: 'Doe',
  hobby: 'Gaming'
};
console.log(person);

person.job = 'Game Designer';
console.log('Their job title is', person.job);

person['previousJob'] = 'Game Producer';
console.log('Their previous job title was', person['previousJob']);

console.log(person);
