exports.up = function(knex) {
  return knex.schema
    .createTable("projects", table => {
      table.increments();
      table.string("project_name").notNullable();
      table.string("project_desc");
      table
        .boolean("completed")
        .notNullable()
        .defaultTo(false);
    })
    .createTable("resources", table => {
      table.increments();
      table.string("resource_name").notNullable();
      table.string("resource_desc");
      table
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects");
    })
    .createTable("tasks", table => {
      table.increments();
      table.string("taks_desc").notNullable();
      table.string("notes");
      table
        .boolean("completed")
        .notNullable()
        .defaultTo(false);
      table
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropIfTableExists("tasks")
    .dropIfTableExists("resources")
    .dropIfTableExists("projects");
};
