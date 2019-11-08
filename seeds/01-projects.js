exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        { project_name: "Cascading Giants" },
        { project_name: "Online Training" },
        { project_name: "Lambda School" }
      ]);
    });
};
