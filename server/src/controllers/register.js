const schemas = require('../schema/schema')
const bcrypt = require('bcryptjs')

const registerUser = async (req, res) => {
    const {email, username, password} = req.body
    // Hashes the plain text password with 10 salt rounds
    const hashedPassword = await bcrypt.hash(password, 10);
    const userData = {email: email, username: username, password: hashedPassword}

    // Try catch used to catch an error instead of it crashing the server

    try {
        const newUser = new schemas.Users(userData)
        const saveUser = await newUser.save()
    
        if(saveUser) {
           res.send('New User Created')
        }
        res.end()
        // Error code 11000 can be returned from MongoDB
    }   catch(e) {
        if (e.code === 11000 && e.keyPattern.email === 1) {
            res.status(403).json({ error: "Email Already in Use" }); 
        } else if (e.code === 11000 && e.keyPattern.username === 1) {
            res.status(409).json({ error: "Username Already in Use" }); 
        } else {
            res.status(500).json({ error: e });
        }
    }

}

module.exports = {
    registerUser
}