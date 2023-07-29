/*Q7. Use Array.reduce() method to reverse the following given array

const arr = [1, 2, 3, 4, 5]  */

const arr = [1, 2, 3, 4, 5]

const reverse= arr.reduce((accumulator, currentValue, index)=>{
    return [currentValue, ...accumulator];
},[]);

console.log(reverse);

/* Output=> [ 5, 4, 3, 2, 1 ] */