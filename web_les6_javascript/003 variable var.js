// variable var
// block scope: no -> bad practice

var message1 = "french fries"; // var can be read GLOBAL scope: YES
if(true)
{
    alert(message1);
}

if(true) {
 var message2 = "hello world"; // var can be read INSIDE scope: YES
 alert(message2);
}

if(true) {
 var message3 = "hello world"; // var can be read OUTSIDE scope: YES
}
alert(message3);
