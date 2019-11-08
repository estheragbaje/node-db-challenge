const knex = require("knex");
const db = require("../data/db-config");

module.exports = {
  getTaskById,
  addTasks,
  getTasks,
  update,
  remove
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

function update(changes, id) {
  return db("tasks")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db(" tasks")
    .where({ id })
    .del();
}
