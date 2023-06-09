let tasks = [];

    function addTask(event){
      event.preventDefault();

      let taskInput = document.getElementById("task");
      let dateInput = document.getElementById("date");
      let taskList = document.getElementById("taskList");
      let message = document.getElementById("message");

      if(taskInput.value === "" || dateInput.value === ""){
        message.innerText = "Please fill in both fields";
      message.style.display = "block";
      return;
    }

    let task = {
      name: taskInput.value,
      date: dateInput.value
    }

    tasks.push(task);
    taskInput.value = "";
    dateInput.value = "";

    displayTasks();
    message.innerText = "Task added successfully";
    message.style.color = "whitesmoke";
    message.style.display = "block";
    setTimeout(function(){
      message.style.display = "none";
    }, 3000);

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function deleteTask(index){
    tasks.splice(index, 1);
    displayTasks();
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function displayTasks(){
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    for(let i=0; i<tasks.length; i++){
      let li = document.createElement("li");
      let span = document.createElement("span");
      let button = document.createElement("button");

      span.innerText = tasks[i].name + " - " + tasks[i].date;
      button.innerText = "Delete";
      button.classList.add("delete");

      button.addEventListener("click", function(){
        deleteTask(i);
      });

      li.appendChild(span);
      li.appendChild(button);
      taskList.appendChild(li);
    }
  }
  let check = document.querySelector('ul');
        check.addEventListener('click', function(set){
            if(set.target.tagName === 'LI'){
                set.target.classList.toggle('checked')
            } 
        }, false);
  // Check if tasks exist in local storage
  if(localStorage.getItem("tasks")){
    tasks = JSON.parse(localStorage.getItem("tasks"));
    displayTasks();
  }
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });
  document.addEventListener('DOMContentLoaded', function() {
    var noDragElements = document.querySelectorAll('.no-drag');

    for (var i = 0; i < noDragElements.length; i++) {
      noDragElements[i].addEventListener('dragstart', function(e) {
        e.preventDefault();
      });
    }
  });