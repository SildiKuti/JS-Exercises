const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".
person2.firstName="Simon";
console.log(person1);
console.log(person2);

//Since we have assigned the values of person 1 to person 2 when we change the values of person 2 it will effect person 1 as well although it is a const.
