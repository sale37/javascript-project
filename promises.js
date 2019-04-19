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