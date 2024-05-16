const {createTalk} = require('../../controllers/Talk/createTalk');

const createTalkHandler = async (req, res) => {
    try {
        const talk = await createTalk(req.body);
        res.status(201).json({message: "Charla creada exitosamente", talk});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    };

module.exports = {createTalkHandler};