const jwt = require('jsonwebtoken')

const secret = process.env.JWT_SECRET

const getUser = async (req, res) => {

    const { token } = req.body

    const username = jwt.verify(token, secret)
    console.log(username)
    res.status(200).json({username: username})
}

module.exports = {
    getUser
}