
		//document.write("Last updated: " + mydate);

		function myFunction() {
			document.getElementById("myDropdown").classList.toggle("show");
		}

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
		};

		$(document).ready(function() {
			$("button").click(function() {
				$("#div1").fadeIn(1000);

			});
		});
		function getValues() { 
			 
			var num1 = parseInt(document.getElementById("myNumber1").value);
			var num2 = parseInt(document.getElementById("myNumber2").value);
			var num3 = parseInt(document.getElementById("myNumber3").value);
			var num4 = parseInt(document.getElementById("myNumber4").value);

			var ar = [ num1, num2, num3, num4 ];

			var numCount = ar.length;
			var posNums = 0;
			var zeros = 0;
			var negs = 0;

			//check to make sure we have numbers
			for (i = 0; i < ar.length; i++) {

				if (isNaN(ar[i])) {
					document.getElementById("div1").innerHTML = "Please enter only numbers";
					return;
				}

			}

			//final_average = (.5 * hwAvg) + (.2 * midExam) + (.2 * finalExam) + (.1 * ACR)

			hwAvg = ar[0];	
			midExam = ar[1];
			finalExam = ar[2];
			ACR = ar[3];
		     var grade = '';
			
			final_average = (0.5 * hwAvg) + (0.2 * midExam) + (0.2 * finalExam) + (0.1 * ACR);
	 
			if (final_average  <=100 && final_average > 90) {
			         grade = "A";
			    } else if (final_average <=90 && final_average > 80)
					{ grade = "B"; }
				  else if (final_average <=80 && final_average > 70)
					{ grade = "C"; }
				 else if (final_average <=70 && final_average >= 60)
					{ grade = "D"; }
					 else if (final_average <60)
					{ grade = "F"; }

			 
			
			console.log(grade);
			document.getElementById("div1").innerHTML =  'Final Grade = ' + grade + ' <br> ' +

			'Final Average = ' + Math.round(final_average);
					
		}

 function getLetterGrade(final_average) {
		var grade1;
		
	 switch (final_average) {
		 
		case final_average <=100 && final_average > 90:
	         grade1 = "A";
		     break;
		case final_average <=90 && final_average > 80:
			grade1 = "A";
			 break;				 
		case final_average <=80 && final_average > 70:
			grade1 = "A";
			 break;	
		case final_average <=70 && final_average > 60:
			grade1 = "A";
		     break;
		case final_average <= 60:
			grade1 = "A";
		 				 	
			
	}
	 
	 return grade1;
 }
		
		
		
		function clickHandler() {

			//alert("testing..");
			$(document).ready(function() {
				$("#div1").fadeOut(1000);
			});

		}

		window.onload = function() {
			document.getElementById('btn').addEventListener('click',
					clickHandler, false);

		};