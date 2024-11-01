const express = require("express");
const app = express();
const PORT = 3000;
fwfffffw;
app.use(express.json()); // Middleware to parse JSON

// Sample data
let tasks = [
  { id: 1, title: "Learn REST API", completed: false },
  { id: 2, title: "Build a Node.js app", completed: false },
];

// GET all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// GET a single task by ID
app.get("/tasks/:id", (req, res) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (task) res.json(task);
  else res.status(404).json({ message: "Task not found" });
});

// POST a new task
app.post("/tasks", (req, res) => {
  const newTask = { id: tasks.length + 1, ...req.body };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT update a task by ID
app.put("/tasks/:id", (req, res) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (task) {
    task.title = req.body.title ?? task.title;
    task.completed = req.body.completed ?? task.completed;
    res.json(task);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});

// DELETE a task by ID
app.delete("/tasks/:id", (req, res) => {
  const taskIndex = tasks.findIndex((t) => t.id === parseInt(req.params.id));
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
