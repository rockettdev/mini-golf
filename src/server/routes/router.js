const express = require('express')
const router = express.Router()
const schemas = require('../schema/schema')

router.post('/signup', async(req, res) => {
    const {email, username, password} = req.body

    const userData = {email: email, username: username, password: password}

    const newUser = new schemas.Contact(userData)
    const saveUser = await newUser.save()

    if(saveUser) {
       res.send('New User Created')
    }
    res.end()
})

module.exports = router ;