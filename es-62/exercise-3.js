function isAdult(p) {
  return p >= 18;
}

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

[age] = [person.age]
console.log(isAdult(age));