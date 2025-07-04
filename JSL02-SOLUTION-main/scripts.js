// Initial task array with sample tasks
let tasks = [
  { id: 1, title: "Launch Epic Career 🚀", description: "Start strong", status: "todo" },
  { id: 2, title: "Conquer React⚛️", description: "React mastery", status: "todo" },
  { id: 3, title: "Understand Databases⚙️", description: "DB knowledge", status: "todo" },
  { id: 4, title: "Crush Frameworks🖼️", description: "Framework confidence", status: "todo" },
  { id: 5, title: "Master JavaScript 💛", description: "Core JS skills", status: "doing" },
  { id: 6, title: "Never Give Up 🏆", description: "Keep pushing", status: "doing" },
  { id: 7, title: "Explore ES6 Features 🚀", description: "Modern JS", status: "done" },
  { id: 8, title: "Have fun 🥳", description: "Enjoy the journey", status: "done" }
];

// Allow up to 3 new tasks
let newTaskLimit = 3;

for (let i = 0; i < newTaskLimit; i++) {
  if (tasks.length >= 11) {
    alert("There are enough tasks on your board, please check them in the console.");
    break;
  }

  const title = prompt(`Enter task ${i + 1} title:`);
  const description = prompt(`Enter task ${i + 1} description:`);

  let status = prompt("Enter task status (todo, doing, done):").toLowerCase();
  while (!["todo", "doing", "done"].includes(status)) {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    status = prompt("Enter task status (todo, doing, done):").toLowerCase();
  }

  const newTask = {
    id: tasks.length + 1,
    title,
    description,
    status
  };

  tasks.push(newTask);
}

// === LOGGING ===

// All tasks
console.log("==== All Tasks ====");
tasks.forEach(task => {
  console.log(`[${task.status.toUpperCase()}] #${task.id}: ${task.title} — ${task.description}`);
});

// Filter & log completed tasks
const completedTasks = tasks.filter(task => task.status === "done");


if (completedTasks.length > 0) {
  console.log("==== Completed Tasks ====");
  completedTasks.forEach(task => {
    console.log(`#${task.id}: ${task.title} — ${task.description}`);
  });
} else {
  console.log("No tasks completed, let's get to work!");
}
// === DOM RENDERING ===
function renderTasks() {
  // Clear existing rendered tasks
  document.querySelectorAll(".tasks-container").forEach(container => {
    container.innerHTML = "";
  });

  tasks.forEach(task => {
    const taskCard = document.createElement("div");
    taskCard.classList.add("task-div");
    taskCard.textContent = task.title;

    const column = document.querySelector(`[data-status="${task.status}"] .tasks-container`);
    if (column) {
      column.appendChild(taskCard);
    }
  });


// Ask the user for the title and description of task 1
const task1Title = prompt("Enter task 1 title:");
const task1Description = prompt("Enter task 1 description:");

// Ask for the status of task 1 and convert it to lowercase
let task1Status = prompt(
  "Enter task 1 status (todo, doing, done):"
).toLowerCase();

// Keep asking until the user enters a valid status for task 1
while (
  task1Status !== "todo" &&
  task1Status !== "doing" &&
  task1Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task1Status = prompt(
    "Enter task 1 status (todo, doing, done):"
  ).toLowerCase();
}

// Repeat the same steps for task 2
const task2Title = prompt("Enter task 2 title:");
const task2Description = prompt("Enter task 2 description:");
let task2Status = prompt(
  "Enter task 2 status (todo, doing, done):"
).toLowerCase();

while (
  task2Status !== "todo" &&
  task2Status !== "doing" &&
  task2Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task2Status = prompt(
    "Enter task 2 status (todo, doing, done):"
  ).toLowerCase();
}

// Check if task1 is done, and log it if so
if (task1Status === "done") {
  console.log("Title: " + task1Title + ", status: " + task1Status);
}

// Check if task2 is done, and log it if so
if (task2Status === "done") {
  console.log("Title: " + task2Title + ", status: " + task2Status);
}

// If neither task1 nor task2 is done, show a motivational message
if (task1Status !== "done" && task2Status !== "done") {
  console.log("No tasks completed, let's get to work!");
}
