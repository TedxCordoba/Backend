const { getEventById } = require("../../controllers/Event/getEventById");

const getEventByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await getEventById(id);
    res.status(200).json(event);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { getEventByIdHandler };