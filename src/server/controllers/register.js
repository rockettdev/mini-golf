const schemas = require('../schema/schema')

const registerUser = async (req, res) => {
    const {email, username, password} = req.body

    const userData = {email: email, username: username, password: password}

    const newUser = new schemas.Contact(userData)
    const saveUser = await newUser.save()

    if(saveUser) {
       res.send('New User Created')
    }
    res.end()
}

module.exports = {
    registerUser
}