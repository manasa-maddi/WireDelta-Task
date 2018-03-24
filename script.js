
			function calculateAge(){
				var birthyear = document.getElementById("birthYear").value;
				var yearToString = birthyear.toString();
				var d = new Date();
				if(yearToString.length != 4){
					showErrorDiv();
					document.getElementById('errorResultDiv').innerHTML = "Note : Please Enter 4 digit  year eg:1994....";
					return false;
				}else if(yearToString>d.getFullYear()){
					showErrorDiv();
					document.getElementById('errorResultDiv').innerHTML = "Note : Please Enter present year or less than the present year";
					return false;
				}
				
				var today = new Date();
				var present = today.getFullYear();
				var result = present - birthyear;
				var result1 = result - 1;
				var yearToString = birthyear.toString();
				if(result.toString().length > 2){
					document.getElementById('errorResultDiv').innerHTML = "Please Enter age bewteen 1 to 99..";
					showErrorDiv();
				}else{
					showSuccessDiv();
					document.getElementById('successResultDiv').innerHTML = "Your age is either <b>" + result1 + "</b> or <b>" + result +"</b>.";
				}
			}
			
			function calculateSupply(){
				var age 			= document.getElementById('currentAge').value;
				var amountPerDay 	= document.getElementById('amountPerDay').value;
				
				const maxage = 100;
				var total= (amountPerDay * 365) * (maxage - age);
				
				showSuccessDiv();
				document.getElementById('successResultDiv').innerHTML = "You will need <b>"  + total + "</b> to last you until the ripe old age of <b>" + maxage + "</b>.";
			}
			
			function calcCircumference(radius){
				var result = 2*(3.14)*radius;
				document.getElementById('successResultDiv').innerHTML = "Circumference Of Circle With Radius " + radius + " is <b>" + result + "</b>.<br />";
			}
			function calcArea(radius){
				var result = (3.14)*radius*radius;
				document.getElementById('successResultDiv').innerHTML += "Area Of Circle With Radius " + radius + " is <b>" + result + "</b>.";
			}
			function calculateCircleProps(){
				var radius = parseInt(document.getElementById('radius').value);
				calcCircumference(radius);
				calcArea(radius);
			}
			
			function celsiusToFahrenheit(input){
				var result = ((input * 9)/5) + 32;
				document.getElementById('successResultDiv').innerHTML = input + "&ordm;C is <b>" + result + "&ordm;F</b>";
			}

			function fahrenheitToCelsius(input){
				var result = (input - 32)*5/9;
				document.getElementById('successResultDiv').innerHTML = input + "&ordm;F is <b>" + result + "&ordm;C</b>";
			}
		
		