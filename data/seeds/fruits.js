/**
 * Seeds data into the 'fruits' table.
 *
 * @param {import("knex").Knex} knex - The Knex connection object.
 * @returns {Promise<void>}
 */
exports.seed = async function (knex) {
  try {
    await knex("fruits").truncate(); // Truncate resets primary keys
    await knex("fruits").insert([
      { fruit_name: "apple", avg_weight_oz: 1.5, delicious: null, color: 'green'},
      { fruit_name: "orange", avg_weight_oz: 0.5, delicious: true, color: 'red'},
      { fruit_name: "pear", avg_weight_oz: 2.5, delicious: false, color: 'green'}, // Use false instead of 0 for clarity
    ]);
  } catch (error) {
    console.error("Error seeding data: ", error);
  }
};
