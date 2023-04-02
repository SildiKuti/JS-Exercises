class Person {
  constructor (firstName, lastName,age){
  this.firstname=firstName;
  this.lastname = lastName;
  this.age = age;
  }
set firstName(name){
  this.firstname = name;
  }
set lastName(name){
  this.lastname = name;
}
set newAge(a){
  this.age = age ;
}
get fullName(){
  return this.firstname + " " + this.lastname
}
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);