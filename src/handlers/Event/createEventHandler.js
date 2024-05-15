const { createEvent } = require('../../controllers/Event/createEvent');

const createEventHandler = async (req, res) => {
    try {
        const event = await createEvent(req.body);
        res.status(201).json(event);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { createEventHandler };