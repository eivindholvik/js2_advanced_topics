// let hei = 1;
// {
//   let hei = 2;

//   console.log("inside", this.hei);
// }
// console.log("outside", hei);

// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     console.log(i, j);
//   }
// }

// class IdManager {
//   currentId = 0;

//   constructor() {}

//   generateId() {
//     this.currentId++;
//     return this.currentId - 1;
//   }
// }

// const personIdManager = new IdManager();
// const productIdManager = new IdManager();

// class Person {
//   name;
//   id;

//   constructor(name) {
//     this.name = name;
//     this.id = personIdManager.generateId();
//   }

//   setName(name) {
//     this.name = name;
//   }
// }
// let myName = "Eivind";
// const Myself = new Person(myName);
// const SomeoneElse = new Person("Hesh");

// console.log(Myself.id, SomeoneElse.id);

// function idMan() {
//   let x = 0;
//   return () => {
//     x++;
//     return x - 1;
//   };
// }

// const personId = idMan();
// console.log(personId());
// console.log(personId());
// console.log(personId());
// console.log(personId());

function changeValue(arrayIn) {
  arrayIn.push("Hello world");
}

const initialArray = [0, 1, 2];

const copiedArray = initialArray;

// Method number one
const hardCopy = [...initialArray];
// Next line is the "manual" way of doing the above
// const hardCopy = [initialArray[0], initialArray[1], initialArray[2]];

// const hardCopy = initialArray.slice(0);

// changeValue(hardCopy);

// console.log(hardCopy);
// console.log(initialArray);

// const [x, ...remainder] = initialArray;
// console.log(x);
// console.log(remainder);

// const y = initialArray[0];
// const rema = initialArray.slice(1);
// console.log(y);
// console.log(rema);

//Sjekker om referansen i stacken er lik i to arrays (eller andre objekter)
function checkEqual(x, y) {
  if (x === y) {
    console.log("same");
  } else {
    console.log("not same");
  }
}

checkEqual(initialArray, copiedArray);
checkEqual(initialArray, hardCopy);

// Sjekker om verdiene i to arrays er like, uavhengig om referansen er lik
function checkEqualValues(x, y) {
  if (x.length !== y.length) return false;
  x.forEach((item, index) => {
    if (item !== y[index]) return false;
  });
  return true;
}

console.log(initialArray, hardCopy);

console.log(checkEqualValues(initialArray, hardCopy));

// Ikke alle variable blir lagret som referanser
let someName = "Eivind";
let myName = someName;

myName = "Truls";

console.log(someName, myName);
