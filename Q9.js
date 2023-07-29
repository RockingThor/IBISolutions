/*Q9. What will the code below output to the console and why?*/

var arr1 = "john".split(''); 

var arr2 = arr1.reverse();

var arr3 = "jones".split('');

arr2.push(arr3);

console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));

console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

/* Output=> 
            array 1: length=5 last=j,o,n,e,s
            array 2: length=5 last=j,o,n,e,s 


The output is like this because console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
 Prints the length of arr2 and the last element of arr2. The length of arr2 is 5 (four elements plus the nested array),
  and arr2.slice(-1) returns the last element of arr2, which is the nested array ['j', 'o', 'n', 'e', 's'].

*/