var person = {
    first_name: "Sale",
    last_name: "Ilic", 
    age: 25
};

var personJSON = '{ "first_name": "Sale", "last_name": "Ilic", "age": 25}';

console.log(JSON.stringify(person));
console.log(JSON.parse(personJSON));

var arrayJson = '["1", "2", "3", "4", "5"]';

var arrayJs = JSON.parse(arrayJson);

for(i = 0; i < arrayJs.length; i++){
    console.log(arrayJs[i]);
}