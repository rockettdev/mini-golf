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

const {
    getUser
} = require('../controllers/getUser')
router.post('/login', getUser)

const {
    submitGame
} = require('../controllers/submitGame')
router.post('/submitGame', submitGame)

module.exports = router