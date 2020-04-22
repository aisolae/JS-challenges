 //how many messages you have left
 var valid_character = 200;
 var message = prompt("write your message");
 var new_message = message.slice(0,200);
 var num_message = message.length;
var remain_message = valid_character - num_message;
alert(new_message);

 alert ('you have written '+ num_message+ "you have " + remain_message+ " characters left");
//end

 //change first letter to capital
 var name = prompt ("what's your name?");
 var firstLetter = name.slice(0,1);
 var otherLetter = name.slice(1,name.length);
 var new_name = firstLetter.toUpperCase();
 alert(new_name+otherLetter);
//end

 //dog age calculation
 var dogAge=prompt("How old is your dog?");
 var humanAge =(dogAge-2) * 4 + 21 ;
 alert(humanAge);
 //end

//lifetime in weeks/ days/ weeks
 function lifeInWeeks(){
     var age = prompt("how old are you?")
     var lifeSpan = 90;
     var yearsLeft= lifeSpan - age;
     var z = yearsLeft * 12;
     var y = z * 4;
     var x = y * 7;
     alert("you have " +x +" days "+ y +" weeks " + z +" months left ")
 }
 lifeInWeeks();
 //end