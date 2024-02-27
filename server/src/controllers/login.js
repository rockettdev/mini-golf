const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const schemas = require('../schema/schema')

const secret = process.env.JWT_SECRET

const loginUser = async (req, res) => {

    const { email, password } = req.body 

    // Queries the database to find one matching email

    const userSearch = await schemas.Users.findOne({email: email})

    // Returns a 401 status with an error code as a response

    if(!userSearch) {
        return res.status(401).json({ e: "User Not Found"})
    }

    const passwordVerification = await bcrypt.compare(password, userSearch.password)

    if(!passwordVerification) {
        return res.status(401).json({ e: "Password is incorrect." })
    }

    const token = jwt.sign({username: userSearch.username}, secret)
    const username = userSearch.username
    console.log(username)
    res.status(200).json({data: token, username: username})
    console.log(token)

}

module.exports = {
    loginUser
}