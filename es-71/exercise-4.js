const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

 let {firstName, lastName,...v} = person

const json = JSON.stringify(v);

console.log(json); // Should return: { id: 1, age: 25 }