
exports.up = async function (knex) {
    await knex.schema
        .createTable('ingredients', tbl => {
            tbl.increments('ingredient_id')
            tbl.text('ingredient_name', 128).notNullable().unique()
        })
        .createTable('steps', tbl => {
            tbl.increments('step_id')
            tbl.integer('step_number').unsigned().notNullable()
            tbl.text('step_instructions').notNullable()
            tbl
                .integer('recipe_id')
                .unsigned()
                .references('recipe_id')
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
        })
        .createTable('recipes', tbl => {
            tbl.increments('recipe_id')
            tbl.text('recipe_name').notNullable().unique()
        })
        .createTable('step_ingredient', tbl => {
            tbl.increments('step_ingredient_id')
            tbl
                .integer('step_id')
                .unsigned()
                .references('step_id')
                .inTable('steps')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
            tbl
                .integer('ingredient_id')
                .unsigned()
                .references('ingredient_id')
                .inTable('ingredients')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')

            tbl.decimal('quantity').unsigned()
        })
};

exports.down = async function (knex) {
    await knex.schema
        .dropTableIfExists('recipes')
        .dropTableIfExists('step_ingredient')
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
};
