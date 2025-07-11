console.log("Hello World");

// Nav Section

document.addEventListener("DOMContentLoaded", () => {
  const themeItems = document.querySelectorAll(".them-item");
  const htmlElement = document.documentElement;

  //   Save Tema

  const saveTheme = (theme) => {
    localStorage.setItem("theme", theme);
  };

  //   Load Tema
  const loadTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      htmlElement.setAttribute("data-theme", savedTheme);
    } else {
      htmlElement.setAttribute("data-theme", "luxury");
    }
  };

  loadTheme();

  //   add event listener
  themeItems.forEach((item) => {
    item.addEventListener("click", () => {
      const theme = item.getAttribute("theme");
      htmlElement.setAttribute("data-theme", theme);
      saveTheme(theme);
    });
  });
});

// Main Section

// global list
let tasks = [];

// add task
function addTask() {
  const taskInput = document.getElementById("task-input");
  const dueDateInput = document.getElementById("due-date-input");

  // validate inputs
  if (taskInput.value === "" || dueDateInput.value === "") {
    alert("Please fill in all fields");
    return;
  } else {
    const newTask = {
      id: Date.now(),
      task: taskInput.value,
      dueDate: dueDateInput.value,
      completed: false,
    };

    console.log(newTask);

    // add new task to global list
    tasks.push(newTask);

    // clear inputs
    taskInput.value = "";
    dueDateInput.value = "";

    // render new task
    displayTasks();
  }
}

function displayTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = ""; // Clear the current list
  tasks.forEach((element) => {
    const taskItem = `
        <div class="flex justify-between items-center p-[8px] border-b">
            <div class="flex flex-col">
                <span class="text-lg">${element.task}</span>
                <span class="text-sm text-gray-500">${element.dueDate}</span>
            </div>
            <button class="bg-green-500 text-white p-[4px] rounded" onclick="toggleTaskCompletion(${
              element.id
            })">${element.completed ? "Undo" : "Complete"}</button>
            <button class="bg-red-500 text-white p-[4px] rounded" onclick="deleteTask(${
              element.id
            })">Delete</button>
            <button class="bg-yellow-500 text-white p-[4px] rounded" onclick="editTask(${
              element.id
            })">Edit</button>
        </div>
        `;
    taskList.innerHTML += taskItem;
  });
}

// Function to delete a specific task
function deleteTask(id) {
  // Find the index of the task to delete
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex !== -1) {
    // Remove the task from the tasks array
    tasks.splice(taskIndex, 1);
    displayTasks(); // Refresh the displayed task list
  }
}

// Function to delete all task
function deleteAllTasks() {
  tasks = []; // Clear the tasks array
  displayTasks(); // Refresh the displayed task list
}

function toggleTaskCompletion(id) {
  // Find the task by ID
  const task = tasks.find((task) => task.id === id);
  if (task) {
    // Toggle the completed status
    task.completed = !task.completed;
    displayTasks(); // Refresh the displayed task list
  }
}

// function edit task
function editTask(id) {
  // Find the task by ID
  const task = tasks.find((task) => task.id === id);
  if (task) {
    // Open a prompt to edit the task
    const newTask = prompt("Enter the new task:", task.task);
    const newDueDate = prompt("Enter the new due date:", task.dueDate);
    if (newTask && newDueDate) {
      // Update the task in the tasks array
      task.task = newTask;
      task.dueDate = newDueDate;
      displayTasks(); // Refresh the displayed task list
    }
  }
}

// function to show completed
function showCompletedTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = ""; // Clear the current list
  const completedTasks = tasks.filter((task) => task.completed);
  completedTasks.forEach((element) => {
    const taskItem = `
        <div class="flex justify-between items-center p-[8px] border-b">
            <div class="flex flex-col">
                <span class="text-lg">${element.task}</span>
                <span class="text-sm text-gray-500">${element.dueDate}</span>
            </div>
            <button class="bg-green-500 text-white p-[4px] rounded" onclick="toggleTaskCompletion(${
              element.id
            })">${element.completed ? "Undo" : "Complete"}</button>
            <button class="bg-red-500 text-white p-[4px] rounded" onclick="deleteTask(${
              element.id
            })">Delete</button>
            <button class="bg-yellow-500 text-white p-[4px] rounded" onclick="editTask(${
              element.id
            })">Edit</button>
        </div>
        `;
    taskList.innerHTML += taskItem;
  });
}
