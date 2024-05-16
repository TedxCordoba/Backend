const { Talk } = require("../../db");
const { validateVideo } = require("../../utils/validateVideo");
const { validateImg } = require("../../utils/validateImg");
const { validateOrador } = require("../../utils/validateOrador");

const updateTalk = async (id, dataToUpdate) => {
    
    const talk = await Talk.findByPk(id);
    if (!talk) throw new Error("La charla que intentas actualizar no existe");

    dataToUpdate.video && validateVideo(dataToUpdate.video);
    dataToUpdate.images && dataToUpdate.images.forEach((image) => validateImg(image));
    dataToUpdate.UserId && await validateOrador(dataToUpdate.UserId);
    
    const updatedTalk = await talk.update(dataToUpdate);

    return updatedTalk;
    };

module.exports = { updateTalk };