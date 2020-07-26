function addtodo (){
    var todo_item = document.getElementById("todo-item")

//create li tag with text node
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)

//Creating delete button
    var delbtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delbtn.setAttribute("class","btn")
    delbtn.setAttribute("onclick","deleteItem(this)")
    delbtn.appendChild(delText)

    //create edit button
    var editbtn = document.createElement("button");
    var editText = document.createTextNode("EDIT")
    editbtn.setAttribute("onclick","editItem(this)")
    
    editbtn.appendChild(editText)

    li.appendChild(delbtn)
    li.appendChild(editbtn)
    

    list.appendChild(li)
    todo_item.value = ""
    


}
var list = document.getElementById("list");

function deleteItem(e){
    e.parentNode.remove()
}

function deleteall(){
    list.innerHTML = ""
}
function editItem(e){
    var val = e.parentNode.firstChild.nodeValue
   var editValue = prompt("Enter new value",val)
   e.parentNode.firstChild.nodeValue = editValue
   
}