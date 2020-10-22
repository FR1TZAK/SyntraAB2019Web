var element = document.getElementById("flexContainer");
var elementHtml = "";

for (let i = 0; i < 50; i++)
{
    elementHtml += `<div class="flexItem"> ${i} </div>`; // uses backtick symbol
    // elementHtml += "<div class='flexItem'>" + i + "</div>";
}

element.innerHTML = elementHtml;
