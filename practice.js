function myFunction(){
    for(i = 0; i < 3; i++){
        var num = i;
        console.log(num);
    } 
};

var numbers = [1, 16, 25];

var square = function(){
    var numbers2 = numbers.map(Math.sqrt);
    return numbers2;
};

(function() {
    console.log(2+2);
  })();

  var timesTwo = (number) => {return number * 2};
    



// myFunction()

// console.log(square());

console.log(timesTwo(5));