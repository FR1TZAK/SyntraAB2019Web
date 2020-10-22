// variable let
// block scope: yes -> good practice

let message1 = "french fries"; // let can be read GLOBAL scope: YES
if(true)
{
    alert(message1);
}

if(true) {
 let message2 = "hello world"; // let can be read INSIDE scope: YES
 alert(message2);
}

if(true) {
 let message3 = "hello world"; // let can be read OUTSIDE scope: NO
}
alert(message3); // EXCEPTION


