const { updateTalk } = require("../../controllers/Talk/updateTalk");

const updateTalkHandler = async (req, res) => {
    const {id} = req.params;
    const dataToUpdate = req.body;
  try {
    const talk = await updateTalk(id, dataToUpdate);
    res.status(200).json({ message: "Charla actualizada exitosamente", talk });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { updateTalkHandler };
