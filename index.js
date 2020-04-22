 //how many messages you have left
 var valid_character = 200
 var message = prompt("write your message")
 var new_message = message.slice(0,200)
 var num_message = message.length;
var remain_message = valid_character - num_message;
alert(new_message);

 alert ('you have written '+ num_message+ "you have " + remain_message+ " characters left");
//end