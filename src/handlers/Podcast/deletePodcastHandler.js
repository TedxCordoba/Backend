const { deletePodcast } = require('../../controllers/Podcast/deletePodcast');

const deletePodcastHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const podcast = await deletePodcast(id);
        res.status(200).json({ message: "Podcast eliminado con éxito", podcast });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { deletePodcastHandler };