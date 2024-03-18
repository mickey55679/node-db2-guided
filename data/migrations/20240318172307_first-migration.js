/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable('fruits', table => {
  table.increments('fruits_id')
  table.string('fruit_name', 100).notNullable().unique()
  table.decimal('avg_weight_oz').notNullable()
  table.boolean('delicious')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('fruits') //we need ifExists because someone might clone the project and migrate down 
};
