 //1. how many messages you have left
 var valid_character = 200;
 var message = prompt("write your message");
 var new_message = message.slice(0,200);
 var num_message = message.length;
var remain_message = valid_character - num_message;
alert(new_message);

 alert ('you have written '+ num_message+ "you have " + remain_message+ " characters left");
//end

 //2. change first letter to capital
 var name = prompt ("what's your name?");
 var firstLetter = name.slice(0,1);
 var otherLetter = name.slice(1,name.length);
 var new_name = firstLetter.toUpperCase();
 alert(new_name+otherLetter);
//end

 //3. dog age calculation
 var dogAge=prompt("How old is your dog?");
 var humanAge =(dogAge-2) * 4 + 21 ;
 alert(humanAge);
 //end

//4. lifetime in weeks/ days/ weeks
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
//5. cost per bottle of milk
 function howMuch(money, costPerBottle){
     console.log(bottlesCost(money, costPerBottle)+ " bottles of milk");
     console.log( returnedMoney(money, costPerBottle)+ " your change") ; // change

 }


 function bottlesCost(startMoney, costPerBottle){

    var num_bottles = startMoney/costPerBottle;
    return num_bottles;

 }

 function returnedMoney(startMoney, costPerBottle){
     var change =  startMoney % costPerBottle;
     return change;
 }

 howMuch(31, 1.5 );

 //end

 //6. leap year calculator

 var year = prompt("what year are you?")

 function leapYear(year){
 if (year % 4 == 0 && year % 100 ==0 && year % 400 == 0){
     alert(year + " is a leap year")
 }

 else {
         alert(year + " is not a leap year")

 }

 }

 leapYear(year);
 end