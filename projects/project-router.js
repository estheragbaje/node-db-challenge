const express = require("express");

const Projects = require("./project-model.js");
const db = require("../data/db-config");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.getProjects()
    .then(projects => {
      res.json(projects);
    })
    .catch(error => {
      res.status(500).json({
        message: "failed to get projects"
      });
    });
});

router.post("/", (req, res) => {
  const projectData = req.body;

  Projects.addProjects(projectData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new project" });
    });
});



module.exports = router;
