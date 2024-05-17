const { createEvent } = require('../../controllers/Event/createEvent');

const createEventHandler = async (req, res) => {
    const { title, description, date, images, imageBanner, sponsors, UserIds  } = req.body;
    try {
        const event = await createEvent({ title, description, date, images, imageBanner, sponsors, UserIds });
        res.status(201).json(event);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { createEventHandler };