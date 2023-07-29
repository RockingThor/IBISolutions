/*Q10. What will the following code's output be in sequence and explain why?*/
function printNumber(num) {

  console.log(num);

}


console.log(1);


setTimeout(printNumber, 0, 2);


setTimeout(printNumber, 100, 3);


console.log(4);

/*

Output => 
1
4
2
3

Control will directly excecute the console.log(1); line...for this output will be 1;
Then it will go two the two setTimeout function but printing anything from those block, it
will wait and will excecute the last console.log for which 4 will be printed. and then 2 will be printed as 2 was passed as
argument to the printNumber function and the delay was 0ms. Then 3 will be printed after 100ms.
*/