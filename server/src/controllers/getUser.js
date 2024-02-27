const jwt = require('jsonwebtoken')

// Retrieves secret from the .env file

const secret = process.env.JWT_SECRET

const getUser = async (req, res) => {

    const { token } = req.body

    // Decrypts and verifies the token using the secret key

    const username = jwt.verify(token, secret)
    console.log(username)
    res.status(200).json({username: username})
}

module.exports = {
    getUser
}