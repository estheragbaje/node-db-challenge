const knex = require("knex");
const db = require("../data/db-config");

module.exports = {
  getProjectById,
  addProjects,
  getProjects,
 
};


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


