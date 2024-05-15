const { Event } = require('../../db');

const createEvent = async (event) => {
    const { title, description, date, images, imageBanner, sponsors } = event;

    const newEvent = await Event.create({
        title,
        description,
        date,
        images,
        imageBanner,
        sponsors
    });
    return newEvent;
}

module.exports = { createEvent };
