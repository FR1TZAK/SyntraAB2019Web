
function createToDoItem()
{

    var myList = document.getElementById("myList");

    if (document.getElementById("myInput").value != "")
    {
        let elementCheckbox = document.createElement("INPUT");
        elementCheckbox.setAttribute("type", "checkbox");

        let elementText = document.createElement("SPAN");
        elementText.setAttribute("class","toDoItem");
        let elementTextValue = document.getElementById('myInput').value;
        let textnode = document.createTextNode(elementTextValue);
        elementText.appendChild(textnode);

        let elementNewLine = document.createElement("BR");

        document.getElementById("myList").appendChild(elementCheckbox);
        document.getElementById("myList").appendChild(elementText);
        document.getElementById("myList").appendChild(elementNewLine);
    }
    else
    {
        alert("Please enter a name");
    }
    //alert(myList.getElementsByClassName("toDoItem").length);
    if(myList.getElementsByClassName("toDoItem").length == 0)
    {
        document.getElementById("myTitle").innerHTML = "No items";
    }
    else
    {
        document.getElementById("myTitle").innerHTML = "My To Do List";
    }

}
