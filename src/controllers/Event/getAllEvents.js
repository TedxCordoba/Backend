const { Event } = require("../../db");

const getAllEvents = async () => {
    try {
        const events = await Event.findAll();
        return events;
    } catch (error) {
        throw new Error(error.message);
    }
    };

module.exports = { getAllEvents };