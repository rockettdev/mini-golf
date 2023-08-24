const schemas = require('../schema/schema')
const bcrypt = require('bcryptjs')

const registerUser = async (req, res) => {
    

    console.log('yo');

    const {email, username, password} = req.body

    const hashedPassword = await bcrypt.hash(password, 10);

    const userData = {email: email, username: username, password: hashedPassword}

    const newUser = new schemas.Users(userData)
    const saveUser = await newUser.save()

    if(saveUser) {
       res.send('New User Created')
    }
    res.end()
}

module.exports = {
    registerUser
}