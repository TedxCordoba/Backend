const { getAllPodcasts } = require('../../controllers/Podcast/getAllPodcasts');

const getAllPodcastsHandler = async (req, res) => {
    try {
        const podcasts = await getAllPodcasts();
        res.status(200).json(podcasts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getAllPodcastsHandler };