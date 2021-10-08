const router = require('express').Router()

router.get('/', (req, res) => {
    console.log(`${req.method} method to ${req.originalUrl}`)
})

module.exports = router
