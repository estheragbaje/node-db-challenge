const express = require("express");

const Resources = require("./resource-model.js");
const db = require("../data/db-config");

const router = express.Router();

router.get("/", (req, res) => {
  Resources.getResources()
    .then(resources => {
      res.json(resources);
    })
    .catch(error => {
      res.status(500).json({
        message: "failed to get resources"
      });
    });
});

router.post("/", (req, res) => {
  const resourceData = req.body;

  Resources.addResources(resourceData)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new resource" });
    });
});

module.exports = router;
