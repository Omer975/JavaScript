function todoList(){
  //var item=document.getElementById("todoInput").value
  var item=document.querySelector("#todoInput").value
  var text=document.createTextNode(item)
  var newItem=document.createElement("li")
  newItem.appendChild(text)
  //document.getElementById("todoList").appendChild(newItem)
  document.querySelector("#todoList").appendChild(newItem)
}

document
.querySelector('#btn')
.addEventListener('click', todoList)
