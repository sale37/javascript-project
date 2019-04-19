// SCOPE ===========================================

// function myFunction(){
//     for(i = 0; i < 3; i++){
//         var num = i;
//         console.log(num);
//     } 
// };

// var numbers = [1, 16, 25];

// var square = function(){
//     var numbers2 = numbers.map(Math.sqrt);
//     return numbers2;
// };

// (function() {
//     console.log(2+2);
//   })();

//   var timesTwo = (number) => {return number * 2};
    
// myFunction()

// console.log(square());

// console.log(timesTwo(5));

// ARRAYS =============================================

// var colours = ['red', 'green', 'blue'];

// function coloursFunction(){
// for(var i = 0; i < colours.length; i++){
//     console.log(colours[i]);
// }
// };

// coloursFunction();

// colours.forEach(function(element) {
//     console.log(element);
//   });

// var reversedArray = colours.reverse();

// console.log(reversedArray);

// var arrayNumbers = [];

// for(i = 1; i < 5; i++){
//     arrayNumbers.push(i);
// }

// let total = arrayNumbers.reduce(function(sum, item){
//     return sum + item;
//   }, 50);

//   console.log(total);

// function arrayFunction(n){
//     let newArray = [];
//     for(i = 0; i <= n; i++){
//         newArray.push(i);
//     }
//     for(i = n-1; i >= 0; i--){
//         newArray.push(i);
//     }
//     return newArray;
// }

// console.log(arrayFunction(10));

// var myZoo = [
//     ["King Kong", ["gorilla", 42]],
//     ["Nemo", ["fish", 5]],
//     ["Punxsutawney Phil", ["groundhog", 11]]
//   ];

//   function zooInventory(array){
//       for(i = 0; i < array.length; i++){
//           var text = array[i][0] + ' the ' + array[i][1][0] + ' is ' + array[i][1][1];
//           console.log(text);
//       }
//   }

//   zooInventory(myZoo);

// JS/JSON Objects ================================================


// var person = {
//     first_name: "Sale",
//     last_name: "Ilic", 
//     age: 25
// };

// var personJSON = '{ "first_name": "Sale", "last_name": "Ilic", "age": 25}';

// console.log(JSON.stringify(person));
// console.log(JSON.parse(personJSON));

// var arrayJson = '["1", "2", "3", "4", "5"]';

// var arrayJs = JSON.parse(arrayJson);

// for(i = 0; i < arrayJs.length; i++){
//     console.log(arrayJs[i]);
// }

// PROMISES =======================================================

let promise = new Promise(function(resolve, reject){
    setTimeout(() => resolve('Success!'), 2000);
});

let promise2 = new Promise(function(resolve, reject){
    setTimeout(() => reject(new Error('Error')), 2000);
});

let promise3 = new Promise(function(resolve, reject){
    setTimeout(() => resolve('Success!'), 2000);
});

let promise4 = Promise.all([promise, promise3]);

promise.then(console.log);
promise2.catch(error => console.log(error.message));
promise3.then(console.log);


promise4.then(
    data => console.log(data),
    error => console.log(error));