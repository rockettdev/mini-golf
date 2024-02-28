const schemas = require('../schema/schema');

const submitGame = async (req, res) => {
    const players = req.body.players;
    const userId = req.body.userId;

    // Manipulates the players array into an object, removing all irrelevant key value pairs
    const transformArrayToObject = (players) => {
        const transformedObject = {};
        
        // for each player object, it pairs the name and final score together and returns it
        players.forEach(({ name, finalScore }) => {
            transformedObject[name] = finalScore;
        });
        
        return transformedObject;
    };
    
    // Converts the players array into an object
    const transformedObject = transformArrayToObject(players);
    console.log(transformedObject);

    try {
        // Tries creating a new game document using the schema and save it
        const newGame = new schemas.Games({ players: transformedObject, userId });
        const savedGame = await newGame.save();
    
        if (savedGame) {
            res.json({ message: 'New Game Created' });
        }
        res.end();
    } catch(e) {
        console.error('Error creating game:', e);
        res.status(500).json({ error: 'Failed to create game' });
    }
};

module.exports = {
    submitGame
};