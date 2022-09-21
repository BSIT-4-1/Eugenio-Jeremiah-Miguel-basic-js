console.log("Hello World!")

//console.error()
//console.table()
//console.time()
//console.warn()
//console.time()

let name = "Miges" //string
let age = 20 // number 
let isSingle = false //boolean
let hobbies = ['watching movies', 'playing instrument', 'palying video game']
let jsonObject = {name: name, age: age, isSingle, hobby: hobbies}
let run = function (){
    console.log(name + " is running.")
};

console.log("My name is " + name, 
"My age is " + age, 
"Am I taken " + isSingle, 
"My hobbies are " + hobbies, 
run);

console.log(jsonObject);

let _let = "something"
let _function = "something"

console.log(typeof name);

console.log(" ");



// if else statement...
// >, <, !, =, ||, 
// + - / % // MAth operations
// if (age == 25){
//     console.log(`${age} == ${25}`);

// }else{
//     console.log(`${age} != ${25}`);

// }

// 1 to 18 = bata pa
// 19 - 21 = college na
// 22 ++ = unemployed

if ( age >= 22){ 
     console.log("Im unemployed.")
 }else if ( age >= 19 && age <= 21){
     console.log("College na")
 }else{
     console.log("Bata pa")
 }

 console.log(" ")

 // TODO: Refactor the if else statement above to a switch statement.

 switch (age) {
  case 1:
    console.log("Bata pa");
    break;
  case 2:
    console.log("Bata pa");
    break;
  case 3:
    console.log("Bata pa");
    break;
  case 4:
    console.log("Bata pa");
    break;
  case 5:
    console.log("Bata pa");
    break;
  case 6:
    console.log("Bata pa");
    break;
  case 7:
    console.log("Bata pa");
    break;
  case 8:
    console.log("Bata pa");
    break;
  case 9:
    console.log("Bata pa");
    break;
  case 10:
    console.log("Bata pa");
    break;
  case 11:
    console.log("Bata pa");
    break;
  case 12:
    console.log("Bata pa");
    break;
  case 13:
    console.log("Bata pa");
    break;
  case 14:
    console.log("Bata pa");
    break;
  case 15:
    console.log("Bata pa");
    break;
  case 16:
    console.log("Bata pa");
    break;
  case 17:
    console.log("Bata pa");
    break;
  case 18:
    console.log("Bata pa");
    break;
  case 19:
    console.log("College na");
    break;
  case 20:
    console.log("College na");
    break;
  case 21:
    console.log("College na");
    break;
  case 22:
    console.log("Unemployed");
    break;
  default:
    console.log("Error")
}


// let a = 0;
// // Loops
// while (a < 10) {
//   console.log("*");
//   a++;
//   if (a == 5) break;
// }

// for (let b = 0; b <= 10; b++) {
//   console.log("x".repeat(b));
//   if (b == 9) break;
// }


// hobbies.forEach((hobby, i) => {
//     if (i >= 1) return;
//     console.log(hobby, i);
//   });


// requiring / importing other js files
const _functions = require("./function.js");
-_functions.consoleMessage("Log this message");

console.log(" ")

function creaeteDiamond (numberofAsteriks){

//loop to create  diamond using <numberofAsterisks>

let n = 5;

for (let i = 1; i <= n; i++) {
  for (let s = 1; s <= n - i; s++) {
    process.stdout.write(' ')
  }
  for (let a = 0; a < 2 * i - 1; a++) {
    process.stdout.write('*')
  }
  console.log();
}

for (let i = 1; i <= n - 1; i++) {
  for (let s = 0; s < i; s++) {
     process.stdout.write(' ');
  }
  for (let a = (n - i) * 2 - 1; a > 0; a--) {
    process.stdout.write('*');
  }
  console.log();
}


  
// if <numberofAsteriks> is and odd number, add +1, to make  it an even number.

  //let number = numberofAsteriks

  // let remainder = (number % 2)

  // if ( remainder == 0 ){
  //   console.log(`${numberofAsteriks} + is even`);
  // }else{
  //   console.log(numberofAsteriks + 1);
  // }


}


creaeteDiamond();

// TODO:
/*
        *
       ***
      *****
     *******
    *********
     *******
      *****
       ***
        *
*/



