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

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Tasks.getTaskById(id)
    .then(task => {
      if (task) {
        res.json(task);
      } else {
        res.status(404).json({ message: "Could not find task with given id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get task" });
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

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    Resources.getTaskById(id)
      .then(task => {
        if (task) {
          Tasks.update(changes, id).then(updatedtask => {
            res.json(updatedtask);
          });
        } else {
          res
            .status(404)
            .json({ message: "Could not find task with given id" });
        }
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to update task" });
      });
  });
  
  router.delete("/:id", (req, res) => {
    const { id } = req.params;
  
    Tasks.remove(id)
      .then(deleted => {
        if (deleted) {
          res.json({ removed: deleted });
        } else {
          res
            .status(404)
            .json({ message: "Could not find task with given id" });
        }
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to delete task" });
      });

module.exports = router;
