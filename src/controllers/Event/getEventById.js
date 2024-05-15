const { Event } = require('../../db');

const getEventById = async (id) => {
    try {
        const event = await Event.findByPk(id);
        if (!event) {
            throw new Error('El evento no existe');
        }
        return event;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = { getEventById };