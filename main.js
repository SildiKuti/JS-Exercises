
// salary if salary < 1200 worker
// <1800 Manager
// 2500 Coe
// else Founder

function role(salary){

    if(salary < 1200){
        return "Worker";
    }
    else if(salary < 1800){
        return "Manager";
    }
    else if(salary < 2500){
        return "Coe"
    }
    else{
        return "Founder";
    }

}

//console.log(role(2500));

let myArr = [15,15,25,358,6,8,48,15,56,84,515,1513,15,1581];

for(let i = 0; i < myArr.length;i++){
    //console.log(myArr[i]);
}

let students = [
    { name: 'Paul', age: 16 },
    { name: 'George', age: 17 },
    { name: 'Lucas', age: 21 },
    { name: 'Marco', age: 32 },
    { name: 'Peter', age: 18 },
    { name: 'Carl', age: 13 },
    { name: 'Simon', age: 24 },
    { name: 'Mark', age: 15 },
    { name: 'Sandra', age: 34 },
    { name: 'Alice', age: 28 }
  ];



function getAllNamesFromObject(students){
    for(let i = 0; i < students.length;i++){
        console.log(students[i].name,students[i].age);
    }
}

console.log(students[1]);
getAllNamesFromObject(students);



function getAllNamesFromObjectToReturn(students){
    let resultArray = [];
    for(let i = 0; i < students.length;i++){
        resultArray.push(students[i].name);
        //console.log(students[i].name,students[i].age);
    }
    return resultArray;
}


console.log(getAllNamesFromObjectToReturn(students));


let todoList = [ 

    {item_name:"Apple", price:"$5", quantity:1, brand_details: {name:"Golden Delicious", location:"San Francisco"}, isChecked:true},
    
    {item_name:"Bannana", price:"$3", quantity:2, brand_details: {name:"Fuji", location:"San Diego"}, isChecked:false},
    
    {item_name:"Pears", price:"$7", quantity:4, brand_details: {name:"Golden Delicious", location:"San Francisco"}, isChecked:true},
                             
    {item_name:"Milk", price:"$4", quantity:3, brand_details: {name:"Mother Dairy", location:"California"}, isChecked:false},
                           
];



    // Print item_name, price and quantity of each object in todo list 

  todoList.map(({item_name, price, quantity}) =>{ 

    //console.log(`${item_name} with quantity ${quantity} with price ${price}`)
  
  });
  
  // "Apple with quantity 1 with price $5"
  // "Bannana with quantity 2 with price $3"
  // "Pears with quantity 4 with price $7"
  // "Milk with quantity 3 with price $4"
  
  // Print item_name and brand name of all checked object 
  
  todoList.map(({item_name, isChecked, brand_details: {name}})=>{ 
  
  if(isChecked){
  
    //console.log(`${item_name} from ${name} is selected`); 
  
  }
  
  });
  
  // "Apple from Golden Delicious is selected"
  // "Pears from Golden Delicious is selected"


  const sum = function (a, b) {
    return a + b;
  }

  const sum1 = (a,b) =>  a+b;
  
  const subtract = function (a, b) {
    return a - b;
  }

  const subtract1 = (a, b) => a - b;




  const getAllNamesFromObjectToReturn2 = (students) => {
    let resultArray = [];
    for(let i = 0; i < students.length;i++){
        resultArray.push(students[i].name);
        //console.log(students[i].name,students[i].age);
    }
    return resultArray;
}




const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
};
//WRONG WAY
//const person2 = person1;
const copyObject = (person) =>{
    return {firstName:person.firstName , lastName:person.lastName , age:person.age};
}

const person2 = copyObject(person1);

console.log(person1);
console.log(person2);


person1.firstName = "Arshya";


console.log(person1);
console.log(person2);

let interval;

function closureFunction(){
    let count = 1;
    function counter(){
        count++;
        console.log(count);
    }
    interval = setInterval(counter,2000);
    setTimeout(counter,2000);
}

//closureFunction();

function killer(){
    clearInterval(interval);
}
//setTimeout(killer,10005);



/*
console.log(Object.keys(students[0]));

console.log(Object.values(students[0]));
*/


let numbers = [1,5,2,4,2,8,1,4,52,68,12,458,2,8,2,5,68,15,84,26,85,213];

function printArray(array){
    for(let i = 0;i< array.length;i++){
        console.log(array[i]);
    }
}
numbers.sort((a, b) => a - b);
/*printArray(numbers);

console.log("//////////////");
numbers.sort((a, b) => b - a);
printArray(numbers);

console.log("//////////////");
numbers.sort((a, b) => a + b);
printArray(numbers);*/

console.log(Math.max(...numbers));
console.log(Math.min(...numbers));
console.log(Math.max(125,250));
console.log(Math.min(125,250));

/**

{... , name:"ali", surname:"veli"};

*/



