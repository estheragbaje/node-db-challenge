const express = require("express");

const Projects = require("./project-model.js");
const db = require("../data/db-config");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.getProjects()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(error => {
      res.status(500).json({
        message: "failed to get projects"
      });
    });
});

module.exports = router;
