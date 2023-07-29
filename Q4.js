/* Q4. What is promise chaining? Explain with an example. 

Answer=>    When we chain together multiple promises in JS, it is called promise chaining. Promise chaining is 
            really helpful when excecuting multiple asynchronus operations in sequence.


Example=>           
*/

const firstPromise= new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(console.log('Finished excecuting first promise'));
    }, 1000);
});

const secondPromise= new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(console.log('Finished excecuting second promise'));
    }, 2000);
});

const thirdPromise= new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(console.log('Finished excecuting first promise'));
    }, 3000);
});

firstPromise.then(()=>{
    secondPromise().then(()=>{
        thirdPromise();
    });
});

/*
 After 1 second the firstPromise will be excecuted, after 2 second the 2nd promise will be resolved and after 3 seconds the third one */