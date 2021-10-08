const router = require('express').Router()

const Recipe = require('./recipe-model')
const { checkId } = require('./recipe-middleware')



router.get('/:recipe_id', checkId, (req, res, next) => {

    const { recipe_id } = req.params
    Recipe.findRecipe(recipe_id)
        .then(result => {
            res.status(200).json(result)
        })
        .catch(next)
})

module.exports = router
