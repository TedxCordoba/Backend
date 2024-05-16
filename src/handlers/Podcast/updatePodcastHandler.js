const { updatePodcast } = require('../../controllers/Podcast/updatePodcast');

const updatePodcastHandler = async (req, res) => {
    const { id } = req.params;
    const dataToUpdate = req.body;
    try {
        const updatedPodcast = await updatePodcast(id, dataToUpdate);
        res.status(200).send(updatedPodcast);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
    };

module.exports = { updatePodcastHandler };