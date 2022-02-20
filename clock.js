// function reverseStr(a) {
// 	const b = a.split("");
// 	const c = [];
// 	for (let i = b.length-1; i >= 0; i--) {
// 		c.push(b[i]);
// 	}
// 	return c.join("");
// }

// console.log(reverseStr("Hello World"));

// let num = 15;
// let text = num.toString();

// console.log(typeof(text));
// console.log(text+text);


// Challange 3
// function map(array, callback) {
//     const newArr = [];
//     for (let element of array) {
//         newArr.push(callback(element))
//     }
//     return newArr;
// }

// const addTwo = num => num+2
// console.log(map([1,2,3], addTwo))
 
//Challange 4

// function forEach (array,callback) {
//   for (let i=0; i<array.length; i++) {
//     callback(array[i]);
//   }
// }

// let alphabet = "";
// const letters = ["a", "b", "c", "d"];
// forEach(letters, (function (char) {
//   alphabet += char;
// }));
// console.log(alphabet);

//Challange 5

// function forEach (array,callback) {
//   for (let i=0; i<array.length; i++) {
//     callback(array[i]);
//   }
// }

// function mapWith(array, callback) {
//   const newArr = [];
//   forEach(array, (item) => {
//     newArr.push(callback(item));
//   });
//   return newArr;
// };

// const addTwo = num => num+2
// console.log(mapWith([1,2,3], addTwo))


//Challange 6

// function forEach (array,callback) {
//   for (let i=0; i<array.length; i++) {
//     callback(array[i]);
//   }
// }

// function reduce(array, callback, initialValue) {
//   let accum;
//   if (Object.keys(arguments).length > 2) { 
//     accum = initialValue;
//   } else {
//     // InitialValue not provided
//     accum = array[0];
//     array.shift();
//   }

//   forEach(array, (item) => {
//     accum = callback(accum, item);
//   });
//   return accum;
// }

// const nums = [4, 1, 3];
// const add = function (a, b) {
//   return a + b;
// };
// console.log(reduce(nums, add, 0))

//Challange 7

// function forEach (array,callback) {
//   for (let i=0; i<array.length; i++) {
//     callback(array[i]);
//   }
// }

// function reduce(array, callback, initialValue) {
//   let accum;
//   if (Object.keys(arguments).length > 2) { 
//     accum = initialValue;
//   } else {
//     // InitialValue not provided
//     accum = array[0];
//     array.shift();
//   }

//   forEach(array, (item) => {
//     accum = callback(accum, item);
//   });
//   return accum;
// }

// function intersection(...arrays) {
//   return arrays.reduce((acc, array) => {
//     return array.filter((item) => acc.includes(item));
//   });
// }

// console.log(
//   intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
// );

// function add(a: number,b: number) {
//     return a+b;
// }

// const result = add(4,5);

// console.log(result)

// function LetterCountI(str){
//     var wordsAndLetters = {};   
//     var count = 0;
//     var finalword;
//     str = str.split(" ");
//     for(var i = 0; i < str.length; i++){
//       wordsAndLetters[str[i]] = wordsAndLetters[str[i]] || 0;
//     }
//     function countWordLetters(strs){
//       strs = strs.split("");
//       var lettercount = {};
//       for(var i = 0; i <strs.length; i++){
//         lettercount[strs[i]] = lettercount[strs[i]] || 0;
//         lettercount[strs[i]]++;
//       }
//       return lettercount;
//     }
//     for(var words in wordsAndLetters){
//       wordsAndLetters[words] = countWordLetters(words);
//       var highestLetterFrequency = wordsAndLetters[words];
//       for(var values in highestLetterFrequency){
//         if(highestLetterFrequency[values] > count){
//           count = highestLetterFrequency[values];
//           finalword = words;
//         }
//         if(count !== 1){
//           return finalword;
//         }
//       }
//     }
//     return -1;
// }
// console.log(LetterCountI("no words"));

// function MathChallenge(num) {
//     if(num === 1) {
//       return true;
//     };
//     if(num % 2 !== 0) {
//       return false;
//     }
//     return MathChallenge(num/2);
//   }
     
//   // keep this function call here 
//   console.log(MathChallenge());


// function StringChallenge(str) { 

//     // code goes here
//     var when,
//         offset,
//         mins,
//         segments = [],
//         ampm,
//         hours,
//         totalMins = [],
//         diff;
  
//   str = str.split('-');
  
//   for (var i = 0; i<str.length; i++) {
  
//     ampm = str[i].slice(str[i].length-2);
//     str[i] = str[i].substr(0, str[i].length-2);
  
//     segments = str[i].split(':');
//     hours = parseInt(segments[0]);
//     mins = parseInt(segments[1]);
  
//     if ((hours == 12) && (ampm == 'am')) {
//       hours = 0;
//     }
  
//     if ((ampm == 'pm') && (hours != 12)) {
//       hours = hours+12;
//     }
  
//     combomins = ((hours*60) + mins);
//     totalMins.push((hours * 60) + mins);
//   }
  
//   if (totalMins[1]<totalMins[0]) {
//     totalMins[1] += 1440;
//   }
//     return totalMins[1]-totalMins[0]; 
  
//   }
     
//   // keep this function call here 
//   console.log(StringChallenge());

// // First calculate the total cost of the pizza including tax
// const calcTotalWithTax = pizzaCost => pizzaCost * 1.13 // Here in Toronto, tax is 13%

// // Then calculate the cost of pizza for two people
// const costForTwo = itemCost => Math.round(itemCost/2 * 100) / 100

// // implement pipe function
// // the pipe function accepts only two
// // operations
// const pipe = (op1, op2) => {
//   // return a function that bundles all
//   // operations into a single operation
//   return (arg) => {
//      // first we invoke op1 with the passed
//     // arg and save its output
//    const result1 = op1(arg);
//    // invoke op2 by calling it with
//    // saved output of the op1 and return the result of op2
//    return op2(result1);
//   }
// }

// //Let's try out the pipe function
// const splitTotalCost = pipe(calcTotalWithTax, costForTwo)
// console.log(`$5 pizza (plus tax), would cost ${splitTotalCost(5)} between two people`); // 2.83


// console.log(Boolean(1n));
// console.log(Boolean(-1n));
// console.log(Boolean(Infinity));
// console.log(Boolean({}));
// console.log(Boolean(Symbol()));

// console.log(parseInt("123"));
// console.log(parseInt("10.00"));
// console.log(parseInt("10.33"));
// console.log(parseInt("34 45 66"));
// console.log(parseInt(" 60 "));
// console.log(parseInt("4050 years"));
// console.log(parseInt("He was 40"));
// console.log(""+123);

// console.log(12 / "6")
// console.log([1]+[1,2,3])
// //1
// console.log("foo" + +"bar")
// //2
// console.log('true' == true)
// //3
// console.log(null=="")
// //4
// console.log(0 || " 0" && {})
// //5
// console.log(["a"] > null)
// console.log('true' == true)
// console.log(Number(true))

// let username = 'ahmet';
// console.log(!username || 'mehmet')

// console.log(3*'3')
// console.log(3/'3')
// console.log(3-'3')
// console.log(3*'3')


// var a = 1;
// if (2 > 1) {
//   console.log('1', a);
//   var a = 2;
// }

// function test() {
//   console.log('3', a);
//   var a = 3;
//   innerTest();
//   function innerTest() {
//     console.log('4', a);
//     var a = 4;
//   }
// }

// function test() {
//   console.log('2', a);
// }

// function test2() {
//   console.log('5', a);
//   function test() {
//     console.log('6', a);
//   }
//   test();
// }

// test();
// test2();
// console.log('7', a);

// const SMILE = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
// <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
// <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
// </svg>`

// const FROWN = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
// <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
// <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
// </svg>`

// let examGrade = prompt("Puanı Girin");
// let textInfo = SMILE;
// let info = document.querySelector('#info')
// info.classList.add('text-primary')

// if (examGrade>=0 && examGrade<=100) {
//     if (examGrade >= 90) {
//         textInfo += "AA"
//     } else if (examGrade >= 85) {
//         textInfo += "BA"
//     } else if (examGrade >= 80) {
//         textInfo += "BB"
//     } else if (examGrade >= 75) {
//         textInfo += "CB"
//     } else if (examGrade >= 70) {
//         textInfo += "CC"
//     } else if (examGrade >= 65) {
//         textInfo += "DC"
//     } else if (examGrade >= 60) {
//         textInfo += "DD"
//     } else if (examGrade >= 50) {
//         textInfo += "FD"
//     } else if (examGrade >= 0) {
//         textInfo = `${FROWN} FF`;
//         info.classList.remove('text-primary')
//         info.classList.add('text-danger')
//     } 
// } else {
//     textInfo = "Geçerli bir not giriniz"
// }

// info.innerHTML = `${textInfo} -> ${examGrade}`


let inputName = prompt("İsminiz nedir?");

let info = document.getElementById('text1');
info.innerHTML = `Merhaba, ${inputName}! Hoş geldin!`

function realtimeClock() {
    let rtClock = new Date();
    let hours   = rtClock.getHours();
    let minutes = rtClock.getMinutes();
    let seconds = rtClock.getSeconds();

    document.getElementById('clock').innerHTML =
        hours + ":" + minutes + ":" + seconds;
    let t = setTimeout(realtimeClock, 500);
}