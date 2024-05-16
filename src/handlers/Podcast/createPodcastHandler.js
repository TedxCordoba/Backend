const { createPodcast } = require('../../controllers/Podcast/createPodcast');

const createPodcastHandler = async (req, res) => {
    const { title, images, podcast, date, UserId, CategoryIds} = req.body;
    try {
        const newPodcast = await createPodcast({ title, images, podcast, date, UserId, CategoryIds });
        res.status(201).json({ message: "Podcast creado con éxito", newPodcast });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { createPodcastHandler };