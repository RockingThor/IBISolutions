/* Q8. In what order will the numbers 1-4 be logged to the console when the code below is executed? Why? */

(function() {

    console.log(1); 

    setTimeout(function(){console.log(2)}, 1000); 

    setTimeout(function(){console.log(3)}, 0); 

    console.log(4);

})();

/*
Output=>

1
4
3
2

Answer=>   The control will reach console.log(1) line and it will print 1
            Then the control will reach setTimeout(function(){console.log(2)}, 1000); Instead of waiting
            this line to excecute, the control will reach setTimeout(function(){console.log(3)}, 0); and will not print anything.
            After that control will reach console.log(4); and will print 4. After that it will print 3 from the prev line
             After completing of 1 second the control will print 2.
*/