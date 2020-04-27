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
 //end

 //8. love calculator

 var name_1 = prompt("what's your name?"); //TODO: verify is name are strings, verify the names are more then 10
 var name_2 = prompt("what's your name?");
 var name;
 name_1 = name_1.slice(0,10);
 name_2 = name_2.slice(0,10);
 var rd_num = Math.random();
 name = name_1.length * name_2.length;
 var rand_num = name * rd_num;
 var lov_value = Math.floor(rand_num) + 1;

 if (lov_value > 70 ){
  alert (name_1 +" 🥰 "+ name_2 + " "+ lov_value + "%" + " This is Above average")
 }
 else if(lov_value > 40 && lov_value <=70){
  alert (name_1 +" 🥰 "+ name_2 + " "+ lov_value + "%"+" This is below average")
 }
 else{
     alert(lov_value+ " your lova falls below middium");
 }

 //end


 //9. search name through array

 var guestList = ["Titi", "James", "Jason", "Angela", "Samuel"]
 var name = prompt("What's your name?");

 if (guestList.includes(name) === true){
     console.log("Welcome");
 }
 else {
     console.log("Your name isn't on the list");
 }

 console.log();
 //TODO: add push to input values into the array.
 //TODO: Verify names in the array.
 //end

 //10. fizzbuz
 var output = [];
 var count = 1;


 function fizzBuzz(){

     while (count <= 100) { //added a while.
         if (count % 3 === 0 && count % 5 === 0){
             output.push("fizzBuzz")
         }
         else if (count % 3 === 0){
             output.push("fizz");
         }
         else if(count % 5 === 0){
             output.push("Buzz");
         }
         else {
             output.push(count);
         }
         count++;
         console.log(output);
     }
 }

 fizzBuzz();


 //11. who is buying lunch

 function whoPaying(){

     var friend_name = ["Angela", "Ben", "Jenny", "Micheal", "Chloe"];
     var n = Math.random();
     var length_friend = friend_name.length;
     var ran_f =  Math.floor(n * length_friend) +1;
     console.log(friend_name[ran_f] +" is going to buy lunch today");
 }
 whoPaying();

 //end

 //12. BMI calculator

 var weight = prompt("what's your weight?"); //first without the variable and a constant of 65 and 1.8
 var height = prompt("What's your height?");

 function bmiCalculator(weight, height){

     console.log(bCalculator (weight, height));

 }

 function bCalculator (myweight, myheight){
     var theight = Math.pow(myheight, 2);
     var tBmi = Math.floor(myweight/theight) ;
     if (tBmi < 18.5){
         console.log("your BMI is "+tBmi +", so you are underweight"  )
     }
     if(tBmi >= 18.5 && tBmi <= 24.9){
        console.log("your BMI is "+tBmi +", so you are normal weight"  )

     }
     else{
          console.log("your BMI is "+tBmi +", so you are overweight"  )
     }
     return tBmi;
 }

 bmiCalculator(weight, height);  //recall the assigned variable .
