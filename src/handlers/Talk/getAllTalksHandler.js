const { getAllTalks } = require('../../controllers/Talk/getAllTalks');

const getAllTalksHandler = async (req, res) => {
    try {
        const talks = await getAllTalks();
        res.status(200).json(talks);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = {getAllTalksHandler};