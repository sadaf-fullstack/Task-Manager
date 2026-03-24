let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {

let taskList = document.getElementById("taskList");
taskList.innerHTML = "";

tasks.forEach((task, index) => {

let li = document.createElement("li");

let taskText = document.createElement("span");
taskText.textContent = task;

taskText.onclick = function(){
taskText.style.textDecoration = "line-through";
}

let deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";

deleteBtn.onclick = function(){
tasks.splice(index,1);
localStorage.setItem("tasks", JSON.stringify(tasks));
displayTasks();
}

li.appendChild(taskText);
li.appendChild(deleteBtn);

taskList.appendChild(li);

});

}

function addTask(){

let input = document.getElementById("taskInput");
let task = input.value;

if(task === ""){
alert("Please enter a task");
return;
}

tasks.push(task);

localStorage.setItem("tasks", JSON.stringify(tasks));

input.value = "";

displayTasks();

}

displayTasks();