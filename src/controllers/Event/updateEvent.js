const { Event } = require("../../db");

const updateEvent = async (id, eventData) => {
  try {
    const event = await Event.findByPk(id);
    if (!event) {
      throw new Error("El evento no existe");
    }
    await event.update(eventData);
    return event;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { updateEvent };
