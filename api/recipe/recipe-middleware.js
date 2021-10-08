const db = require('../../data/db-config')

async function checkId(req, res, next) {
    try {
        const result = await db('recipes').select('recipes.recipe_id').where('recipe_id', req.params.recipe_id).first()
        if (!result) {
            next({ status: 404, message: `recipe with id ${req.params.recipe_id} not found!` })
        } else {
            next()
        }

    } catch { err => next(err) }
}

module.exports = { checkId }
