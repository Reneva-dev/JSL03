// ===== Initial Task Array =====
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

// ===== User Input for Up to 3 New Tasks =====
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

// ===== Logging Section =====
console.log("==== All Tasks ====");
tasks.forEach(task => {
  console.log(`[${task.status.toUpperCase()}] #${task.id}: ${task.title} — ${task.description}`);
});

const completedTasks = tasks.filter(task => task.status === "done");

if (completedTasks.length > 0) {
  console.log("==== Completed Tasks ====");
  completedTasks.forEach(task => {
    console.log(`#${task.id}: ${task.title} — ${task.description}`);
  });
} else {
  console.log("No tasks completed, let's get to work!");
}

// ===== DOM Rendering Function =====
function renderTasks() {
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
}

// ===== Call renderTasks After Data Setup =====
renderTasks();
