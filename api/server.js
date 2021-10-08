const express = require('express')
const helmet = require('helmet')
const recipeRouter = require('./recipe/recipe-router')

const server = express()

server.use(helmet())
server.use(express.json())
server.use('/api/recipes', recipeRouter)

server.get('*', (req, res, next) => {
    next({
        status: 404,
        message: 'this endpoint is not built yet!'
    })
})

server.use((err, req, res, next) => { //eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message
    })
})

module.exports = server
