const knex = require("knex");
const db = require("../data/db-config");

module.exports = {
  getResourceById,
  addResources,
  getResources
};

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
