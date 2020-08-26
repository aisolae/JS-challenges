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


 //13. 99 bottles challenge

 let first_sentence = "bottles of beer on the wall, ";
 let second_sentence = "bottles of beer.";
 let third_sentence = "take one down and pass it around,";
 let fourth_sentence = "bottles of beer on the wall.";

 for (i=99; i >= 0; i--){
     console.log(i + " "+ first_sentence+" "+i+" "+second_sentence);
     console.log(third_sentence+ --i+" "+fourth_sentence);
     i+=1;


 }
// 14.  mad libs challenge
var verb = prompt("Please, enter a verb ")
var noun = prompt('please, enter a noun.')
var adjective = prompt("please, enter an adjective")
alert("all done")
document.write("There once was  " + adjective + " programmer who wanted to learn fullstack to "+ verb+" the "+ noun )

// 14.  mad libs challenge with remainder
// var verb = prompt("Please, enter a verb [2 questions left] ")
// var noun = prompt('please, enter a noun. [1 question left]')
// var adjective = prompt("please, enter an adjective")
// alert("all done")
// document.write("There once was  " + adjective + " programmer who wanted to learn fullstack to "+ verb+" the "+ noun )

var question = 3;
var questionLeft = " [ " + question + " questions left ]"
var verb = prompt("Please, enter a verb" + questionLeft)
questionLeft =question - 1
var questionLeft = " [ " + question + " questions left ]"
var noun = prompt('please, enter a noun.' +questionLeft)
questionLeft =question - 1
var questionLeft = " [ " + question + " question left ]"
var adjective = prompt("please, enter an adjective" + questionLeft)
alert("all done")
document.write("There once was  " + adjective + " programmer who wanted to learn fullstack to "+ verb+" the "+ noun )

//15. randomize your values

var number = prompt("guess what number i am thinking btw 1-6")
var new_number = Math.random() * parseInt(number);
var final_number = Math.floor(new_number) + 1;
alert (final_number);

//16. Random Number Guessing Game
var GuessNumber = prompt("what number am i thinking btw 1-6?");
var random_math = Math.random() * parseInt(GuessNumber);
var out_number = Math.floor (random_math) +1;

if (GuessNumber === out_number){ 
    
    alert("you guessed right");

}
else{
alert ("you need to try again." + " the guess number is "+ out_number)
}

//16.1 Random Number Guessing Game
var correct_guess = false
var GuessNumber = prompt("what number am i thinking btw 1-6?");
var random_math = Math.random() * parseInt(GuessNumber);
var out_number = Math.floor (random_math) +1;

if (GuessNumber === out_number){
    correct_guess = True
}

if (correct_guess === True){ 
    
    alert("you guessed right");

}
else{
alert ("you need to try again." + " the guess number is "+ out_number)
}

//17. improving random number with  else if
var correct_guess = false
var GuessNumber = prompt("what number am i thinking btw 1-6?");
var random_math = Math.random() * parseInt(GuessNumber);
var out_number = Math.floor (random_math) +1;

if (GuessNumber === out_number){
    correct_guess = true
}else if( GuessNumber < out_number ){
    var GuessNumber_2 = prompt("your answer is lower than the output, please try again?");
    if (GuessNumber_2 === out_number){
        correct_guess = true
    }
}else if (GuessNumber > out_number){
     var guessNumber_3 = prompt("your answer is greater than the output, please try again");
     if (guessNumber_3 === out_number){
        correct_guess = true
     }
 }
if (correct_guess){
    alert("your answer was right")
 }
else{
alert ("you need to try again." + " the guess number is "+ out_number)
}
//18. quiz program.
var question_correct = false
var question_count = 5
var question_left = " [you have "+ question_count + " left]"
var question_1 = prompt("what's the capital of china?" + question_left);
if (question_1.toUpperCase = "BEIJING"){
    count +=1
} 
var question_count = question_count -1 
var question_left = " [you have "+ question_count + " left]"
var question_2 = prompt("What's the capital of Nigeria?"  + question_left);
if (question_2.toUpperCase = "BEIJING"){
    count +=1
} 
var question_count = question_count -1 
var question_left = " [you have "+ question_count + " left]"
var question_3 = prompt("What's the capital of Nigeria?"  + question_left);
if (question_3.toUpperCase = "BEIJING"){
    count +=1
} 
var question_count = question_count -1 
var question_left = " [you have "+ question_count + " left]"
var question_4 = prompt("What's the capital of Nigeria?"  + question_left);
if (question_4.toUpperCase = "BEIJING"){
    count +=1
} 
var question_count = question_count -1 
var question_left = " [you have "+ question_count + " left]"
var question_5 = prompt("What's the capital of Nigeria?"  + question_left);
if (question_5.toUpperCase = "BEIJING"){
    count +=1
} 
 
if (count === 5 ){
    alert ( "you have won a gold star ⭐️")
    
}
else if (count >= 3){
    alert ("you have won a 🥈 medaal")
}

else if (count >= 1){
    alert("you have won nothing.")
}

// 19. functions with random generator

function random_number(){
    var num1 = prompt(" pick a btw 1 & 10");
    if ( isNaN(num1)){
        throw "your value isn't a number";  //output error on the console
    }
    if (num1 <1 || num1 > 10){
        var num_wrong = prompt("you picked outside the range, enter a value btw 1 & 10")
        num1 = num_wrong;
    }
    var num2 = prompt(" pick a btw 10 & 30");
    if (isNaN(num2)){
        throw "your value isn't a number"
    }
    if (num2 <10 || num2 > 30){
        var num_wrong = prompt("you picked outside the range, enter a value btw 10 & 30")
        num2 = num_wrong;
    }
    var new_number = parseInt(num2 - num1);
    var rand_new_num = Math.floor(Math.random() * new_number)+ 1
    return rand_new_num;

}

alert(random_number());