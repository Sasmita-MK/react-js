function ToDoList()
{
    let str = document.getElementById("input").value;
    let listElement = document.createElement("li");
    let unList = document.getElementById("unList");
    listElement.textContent = str;
    unList.appendChild(listElement);
    document.getElementById("input").value = "";
}