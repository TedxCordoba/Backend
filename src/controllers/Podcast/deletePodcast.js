const {Podcast} = require("../../db");

const deletePodcast = async (id) => {
    const podcast = await Podcast.findByPk(id);
    if (!podcast) throw new Error("El podcast que intentas eliminar no existe");

    await podcast.destroy();

    return podcast;
};

module.exports = {deletePodcast};