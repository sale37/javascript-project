var colours = ['red', 'green', 'blue'];

function coloursFunction(){
for(var i = 0; i < colours.length; i++){
    console.log(colours[i]);
}
};

coloursFunction();

colours.forEach(function(element) {
    console.log(element);
  });

var reversedArray = colours.reverse();

console.log(reversedArray);

var arrayNumbers = [];

for(i = 1; i < 5; i++){
    arrayNumbers.push(i);
}

let total = arrayNumbers.reduce(function(sum, item){
    return sum + item;
  }, 50);

  console.log(total);

function arrayFunction(n){
    let newArray = [];
    for(i = 0; i <= n; i++){
        newArray.push(i);
    }
    for(i = n-1; i >= 0; i--){
        newArray.push(i);
    }
    return newArray;
}

console.log(arrayFunction(10));

var myZoo = [
    ["King Kong", ["gorilla", 42]],
    ["Nemo", ["fish", 5]],
    ["Punxsutawney Phil", ["groundhog", 11]]
  ];

  function zooInventory(array){
      for(i = 0; i < array.length; i++){
          var text = array[i][0] + ' the ' + array[i][1][0] + ' is ' + array[i][1][1];
          console.log(text);
      }
  }

  zooInventory(myZoo);