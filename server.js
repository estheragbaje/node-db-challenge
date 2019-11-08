const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

const projectRouter = require("./projects/project-router.js");

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/projects", projectRouter);

server.get("/", (req, res) => {
  res.send("<h4>Hello from Project Management App</h4>");
});

module.exports = server;
