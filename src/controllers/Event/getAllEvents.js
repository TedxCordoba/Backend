const { Event, User } = require("../../db");

const getAllEvents = async () => {
    const events = await Event.findAll({
        include: {
            model: User,
            as: 'Users',
            attributes: ['id', 'name', 'image'],
            through: { attributes: [] }
        }
    });

    return events;
    };

module.exports = { getAllEvents };