const knex = require("knex");
const db = require("../data/db-config");

module.exports = {
  getResourceById,
  addResources,
  getResources,
  update,
  remove
};

//get resource by id
function getResourceById(id) {
  return db("resources")
    .where({ id })
    .first();
}

//add resources
async function addResources(resource) {
  const [id] = await db("resources").insert(resource);
  return getResourceById(id);
}

//get resources
function getResources() {
  return db("resources");
}

function update(changes, id) {
  return db("resources")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db(" resources")
    .where({ id })
    .del();
}
