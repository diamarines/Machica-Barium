            var nickname = "Kate";
            var height = 60;
            var weight = 40;
            var feet=height/12 +"\"";
            var lb=weight/2.204623 + " lbs";
            alert(`Nickname: ${nickname} 
            	Height: ${feet} 
            	Weight: ${lb}`);

  let text;
  let firstname = prompt("Please enter your first name:", "");
  let lastname = prompt("Please enter your last name:", "");
  let birthyear = prompt("Please enter your birth year:", "");
    var age=Math.abs(2023-birthyear)

  text = "Hello " + firstname + " "+lastname + "! How does it feel to be "+ age + " years old?";
  
  document.getElementById("demo2").innerHTML = text;


    var a = confirm("Do you agree to share your personal information?");
   
   		if (a==true){

   			var nickname = "Kate";
            var height = 60;
            var weight = 40;
            var feet=height/12 +"\"";
            var lb=weight/2.204623 + " lbs";
   			document.getElementById("demo3").innerHTML = "Nickname: "+nickname + " Height: "+feet + " Weight: "+ lb;
   			
   		}else
   			document.getElementById("demo3").innerHTML = "User does not wish to share his/her information";

