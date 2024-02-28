const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define users schema
const userSchema = new Schema({
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String },
    entryDate: { type: Date, default: Date.now }
});

// Defines games schema
const gameSchema = new Schema({
    userId: { type: String },
    players: { type: Object } // Accepts any type of data
});

// Creates models
const Users = mongoose.model('User', userSchema);
const Games = mongoose.model('Game', gameSchema);

module.exports = {
    Users,
    Games
};