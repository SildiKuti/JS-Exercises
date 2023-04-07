const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}
Object.keys(person)
// Print values of person using Object.keys
const keys = Object.keys(person)

for (let i = 0; i < keys.length; i++){
  const key = keys[i];
  console.log(`${key}: ${person[key]}`)
}