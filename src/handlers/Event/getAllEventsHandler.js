const { getAllEvents } = require("../../controllers/Event/getAllEvents");

const getAllEventsHandler = async (req, res) => {
    try {
        const events = await getAllEvents();
        res.status(200).json(events);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    };

module.exports = { getAllEventsHandler };