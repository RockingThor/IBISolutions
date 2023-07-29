/* Q6. What is callback hell? Explain different ways to solve callback hell with examples each.

Answer=>    When we are using multiple nested callbacks in JS, the problem of callback hell occurs.
            Callback hell decreases the code readability and makes the code logic more difficult.

Ways to resolve it =>  There are mainly two ways to resolve callback hell
                                1. Promises
                                2. Using Async/await

Using Promises=>  
*/
const firstPromise= new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(console.log('Finished excecuting first promise'));
    }, 1000);
});

const secondPromise= new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(console.log('Finished excecuting second promise'));
    }, 1000);
});

const thirdPromise= new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(console.log('Finished excecuting first promise'));
    }, 1000);
});

const allPromises= Promise.all([
    firstPromise,
    secondPromise,
    thirdPromise,
]);

/*

In this example, we use the Promise.all() method to chain together the three promises. The Promise.all()
method will resolve when all of the promises have resolved. Once the Promise.all() method has resolved,
we can see the messages in the console.

Using Async/await=>
*/

const asyfirstPromiseaa= new Promise( async(resolve, reject)=>{
    setTimeout(() => {
        resolve(console.log('Finished excecuting first promise'));
    }, 1000);
});

const secondPromiseaa= new Promise(async(resolve, reject)=>{
    setTimeout(() => {
        resolve(console.log('Finished excecuting second promise'));
    }, 1000);
});

const thirdPromiseaa= new Promise(async(resolve, reject)=>{
    setTimeout(() => {
        resolve(console.log('Finished excecuting first promise'));
    }, 1000);
});

const main= async()=>{
    await firstPromiseaa;
    await secondPromiseaa;
    await thirdPromiseaa;
}
/*In this example, we use the async and await keywords to write asynchronous code in a more natural way.
 We can use the await keyword to wait for a promise to resolve before continuing with the next line of code.*/