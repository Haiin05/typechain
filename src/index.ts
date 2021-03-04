// const sayHi = (name: string, age: number, gender: string): string => {
//   return `Hi, this is ${name}, I'm ${age} years old and I'm a ${gender}`;
// };

// console.log(sayHi("Heizle", 100, "female"));

//------

// interface Human {
//   nickName: string;
//   age: number;
//   gender: string;
// }

// const haiin = {
//   nickName: "Heizle",
//   age: 100,
//   gender: "female",
// };

// const sayHi = (haiin: Human): string => {
//   return `Hi, this is ${haiin.nickName}, I'm ${haiin.age} years old and I'm a ${haiin.gender}`;
// };

// console.log(sayHi(haiin));

// export {};

//------

class Human {
  public nickName: string;
  public age: number;
  public gender: string;
  constructor(nickName: string, age: number, gender: string) {
    this.nickName = nickName;
    this.age = age;
    this.gender = gender;
  }
}

const haiin = new Human("Heizle", 100, "female");

const sayHi = (haiin: Human): string => {
  return `Hi, this is ${haiin.nickName}, I'm ${haiin.age} years old and I'm a ${haiin.gender}`;
};

console.log(sayHi(haiin));

export {};
