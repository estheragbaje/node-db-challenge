const knex = require("knex");
const db = require("../data/db-config");

module.exports = {
  getProjectById,
  addProjects,
  getProjects,
  getTaskById,
  addTasks,
  getTasks
};

function getTaskById(id) {
  return db("tasks")
    .where({ id })
    .first();
}

//get tasks
function getTasks() {
  return db("tasks");
}

//add tasks
async function addTasks(task) {
  const [id] = await db("tasks").insert(task);
  return getTaskById(id);
}

//get project by id
function getProjectById(id) {
  return db("projects")
    .where({ id })
    .first();
}

//add projects
async function addProjects(project) {
  const [id] = await db("projects").insert(project);
  return getProjectById(id);
}

//get projects
function getProjects() {
  return db("projects");
}


