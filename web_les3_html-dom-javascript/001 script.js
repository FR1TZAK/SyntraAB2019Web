var element = document.getElementById("block1");
var elementChild1 = element.getElementsByTagName("h3")[0].innerHTML;
var elementChild2 = element.getElementsByTagName("h3")[1].innerHTML;

alert("Hi there!");

function giveFeedback1()
{
    
    alert(`You clicked on ${elementChild1}`);
}


var counter = 0;
function giveFeedback2()
{
    let element = document.getElementById("labelCounter"); // let can not be used outside scope of giveFeedback2()
    counter++;
    element.innerHTML = `Clicked ${counter} times`; // uses backtick symbol
    //element2.innerHTML = "Clicked " + counter + " times";
}

function resetLabelCounter()
{
    counter = 0;
    let element = document.getElementById("labelCounter");
    element.innerHTML = `Clicked ${counter} times`;
}
