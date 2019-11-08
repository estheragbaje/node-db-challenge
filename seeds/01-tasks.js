exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          task_desc: "buy things",
          notes: "extra",
          completed: 0,
          project_id: 1
        },
        {
          task_desc: "call clients",
          notes: "extra",
          completed: 1,
          project_id: 3
        },
        {
          task_desc: "go shopping",
          notes: "extra",
          completed: 1,
          project_id: 2
        }
      ]);
    });
};
