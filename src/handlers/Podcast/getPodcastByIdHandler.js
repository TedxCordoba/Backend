const { getPodcastById } = require('../../controllers/Podcast/getPodcastById');

const getPodcastByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const podcast = await getPodcastById(id);
        res.status(200).send(podcast);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

module.exports = { getPodcastByIdHandler };