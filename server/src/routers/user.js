const express = require('express')
const router = express.Router()
const {
    registerUser
} = require('../controllers/register')
router.post('/register', registerUser)

const {
    loginUser
} = require('../controllers/login')
router.post('/login', loginUser)

module.exports = router