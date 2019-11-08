const express = require("express");

const Tasks = require("./task-model.js");
const db = require("../data/db-config");

const router = express.Router();

router.get("/", (req, res) => {
  Tasks.getTasks()
    .then(tasks => {
      res.json(tasks);
    })
    .catch(error => {
      res.status(500).json({
        message: "failed to get tasks"
      });
    });
});

router.post("/", (req, res) => {
  const taskData = req.body;

  Tasks.addProjects(taskData)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new task" });
    });
});

module.exports = router;
