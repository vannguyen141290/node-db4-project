
exports.seed = async function (knex) {
  await knex.table('recipes').truncate()
  await knex.table('recipes').insert([
    { recipe_name: "the best noddles" }
  ])
  await knex.table('steps').truncate()
  await knex.table('steps').insert([
    { recipe_id: 1, step_number: 1, step_instructions: "put a pack of noddles in hot boiling pot" },
    { recipe_id: 1, step_number: 2, step_instructions: "put salt in boiling noddles" },
    { recipe_id: 1, step_number: 3, step_instructions: "drain water" },
    { recipe_id: 1, step_number: 4, step_instructions: "put oil, in a pan and fry noddles" },
    { recipe_id: 1, step_number: 5, step_instructions: "add suger, salt, pepper and chilli as desired" },

  ])
  await knex.table('ingredients').truncate()
  await knex.table('ingredients').insert([
    { ingredient_name: "salt" },
    { ingredient_name: "sugar" },
    { ingredient_name: "pepper" },
    { ingredient_name: "chilli" },
    { ingredient_name: "noddles" },
    { ingredient_name: "oil" },
  ])
  await knex.table('step_ingredient').truncate()
  await knex.table('step_ingredient').insert([
    { step_id: 1, ingredient_id: 5, quantity: 1 },
    { step_id: 2, ingredient_id: 1, quantity: 0.3 },
    { step_id: 3 },
    { step_id: 4, ingredient_id: 6, quantity: 0.7 },
    { step_id: 5, ingredient_id: 3, quantity: 0.02 },
    { step_id: 5, ingredient_id: 1, quantity: 0.7 },
    { step_id: 5, ingredient_id: 2, quantity: 0.1 },
    { step_id: 5, ingredient_id: 4, quantity: 0.2 },
  ])
};
