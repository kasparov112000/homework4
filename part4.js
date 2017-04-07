 $(document).ready(function() {
     for (var i = 1; i <= 6; i++) {
         $('#a' + i).focus(function() {
             $(this).css('background-color', 'red');
         }); // hover in field, change background color

         $('#q' + i).focus(function() {
             $(this).css('background-color', 'red');
         }); // hover in field, change background color


         $('#a' + i).focusout(function() {
             $(this).css('background-color', 'lightgray');
         }); // hover in field, change background color


         $('#q' + i).focusout(function() {
             $(this).css('background-color', 'lightgray');
         }); // hover in field, change background color


     }
 });

 // Close the dropdown menu if the user clicks outside of it
 window.onclick = function(event) {
     if (!event.target.matches('.dropbtn')) {

         var dropdowns = document
             .getElementsByClassName("dropdown-content");
         var i;
         for (i = 0; i < dropdowns.length; i++) {
             var openDropdown = dropdowns[i];
             if (openDropdown.classList.contains('show')) {
                 openDropdown.classList.remove('show');
             }
         }
     }
 }

 function calculate() {

     // declare variables
     var num1, num2, num3, num4, x;

     num1 = 1;
     num2 = 0;

     // for statement for every 3rd integer between 5-20 inclusive
     for (var i = 5; i < 21; i += 3) {
         num1 *= i;
         num2 += i;
     }

     x = 3;
     num3 = 1;
     num4 = 0;

     // while statement for every 4th integer between 3-31 includsive
     while (x < 32) {
         num3 *= x;
         num4 += x;
         x += 4;
     }

     // display the results
     document.getElementById("forLoopMult").innerHTML = "The result of 5 * 8 * 11 * 14 * 17 * 20 is: " + num1;
     document.getElementById("forLoopSum").innerHTML = "The result of 5 + 8 + 11 + 14 + 17 + 20 is: " + num2;
     document.getElementById("whileLoopMult").innerHTML = "The result of 3 * 7 * 11 * 15 * 19 * 23 * 27 * 31 is: " + num3;
     document.getElementById("whileLoopSum").innerHTML = "The result of 3 + 7 + 11 + 15 + 19 + 23 + 27 + 31 is: " + num4;

 }


 function myFunction() {
     document.getElementById("myDropdown").classList.toggle("show");
 }

 function rsForm() {
     document.getElementById("myform").reset();
     document.getElementById("errOut").innerHTML = "";
 }



 function setValues() {

     var totals = [];
     var qs = [];

     for (i = 1; i <= 5; ++i) {
         qs[i] = parseInt(document.getElementById("q" + i).value);
     }



     for (i = 1; i <= 5; ++i) {
         if (isNaN(qs[i]) || qs == "") {
             document.getElementById("messages").innerHTML = "Please Enter a number on all Quantity fields";
             return;
         }
     }



     for (i = 1; i < 6; ++i) {
         switch (i) {
             case 1:
                 p = 2.98;
                 totals[1] = qs[1] * p;
                 break;
             case 2:
                 p = 4.50;
                 totals[2] = qs[2] * p;
                 break;
             case 3:
                 p = 9.98;
                 totals[3] = qs[3] * p;
                 break;
             case 4:
                 p = 4.49;
                 totals[4] = qs[4] * p;
                 break;
             case 5:
                 p = 6.87;
                 totals[5] = qs[5] * p;
                 break;
         }
     }

     total = 0;

     for (i = 1; i <= 5; ++i) {
         total += totals[i];
     }


     for (i = 1; i <= 5; ++i) {
         document.getElementById("a" + i).value = totals[i].toFixed(2);
     }

     document.getElementById("a6").value = total.toFixed(2)

 }