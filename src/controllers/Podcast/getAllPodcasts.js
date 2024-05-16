const { Podcast, Category } = require("../../db");

const getAllPodcasts = async () => {
    const podcasts = await Podcast.findAll({
        include: {
            model: Category,
            as: 'Categories',
            attributes: ['id', 'name'],
            through: { attributes: [] }
        }
    });

    return podcasts;
} ;

module.exports = { getAllPodcasts };