const express = require('express')

let users = []

const routes = express.Router({
    mergeParams: true
})

//
routes.get('/', (req, res) => {
    res.status(200).json({ success: true, msg: 'Landing!' })
})

//Add a user
routes.post('/', (req, res) => {
    try {
        const user = req.body

        const newUser = users.push(...user)
        res.status(201).json({ success: true, data: newUser })
    } catch (err) {
        console.log(err.message)
    }
})

module.exports = routes