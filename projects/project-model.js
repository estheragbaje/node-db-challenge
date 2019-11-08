const knex = require("knex");
const db = require("../data/db-config");

module.exports = {
  getResourceById,
  addResources,
  getResources,
  getProjectById,
  addProjects,
  getProjects,
  getTaskById,
  addTasks,
  getTasks
};

// insert into tasks
// (taks_desc, notes, completed, project_id)
// values
// ("get hotel venue", "book hotel for musicians", 1, 3)

//get tasks by id
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

//get resource by id
function getResourceById(id) {
  return db("resources")
    .where({ id })
    .first();
}

//add projects
async function addResources(resource) {
  const [id] = await db("resources").insert(resource);
  return getResourceById(id);
}

//get projects
function getResources() {
  return db("resources");
}
