const {getTalkById} = require('../../controllers/Talk/getTalkById');

const getTalkByIdHandler = async (req, res) => {
    const {id} = req.params;
    try {
        const talk = await getTalkById(id);
        res.status(200).json({talk});
    } catch (error) {
        res.status(404).json({error: error.message});
    }
};

module.exports = {getTalkByIdHandler};