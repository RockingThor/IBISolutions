/*Q11. Check the below given code, if there are any issues, fix them and explain the output*/

const numbers = [1, 2, 3, 4, 5];

const result = numbers.reduce((acc, num) => {

  if (num % 2 === 0) {

    acc.evens.push(num);

  } else {

    acc.odds.push(num);

  }

  return acc;

});



console.log(result);

/*

Output will be an error as evens and odd properties are not defined on the acc so push will not work.

*/