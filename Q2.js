for (var i = 0; i < 5; i++) {

    setTimeout(() => console.log(i), 100)
  
};

/*
Output=>

5
5
5
5
5

*/


/*

Explaination=>

The output of the above code will be 5 times 5. The main reason for this kind of output is that the setTimeOut()
function will not excecute immediately. By the time the setTimeout() function will run, the value of I will 
be incremented to 5 as for loop will finish its excecution.

*/