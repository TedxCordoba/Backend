const {updateEvent} = require('../../controllers/Event/updateEvent');

const updateEventHandler = async (req, res) => {
    const {id} = req.params;
    const eventData = req.body;
    try {
        const updatedEvent = await updateEvent(id, eventData);
        res.status(200).json({message: " Evento actualizado con éxito " ,updatedEvent});
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {updateEventHandler};