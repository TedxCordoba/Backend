const { Podcast, Category } = require("../../db");
const { validateImg } = require("../../utils/validateImg");
const { validateOrador } = require("../../utils/validateOrador");
const { validatePodcast } = require("../../utils/validatePodcast");

const createPodcast = async ({title,  images,  podcast,  date,  UserId,  CategoryIds,}) => {

  images && images.forEach((img) => validateImg(img));
  await validateOrador(UserId);
  validatePodcast(podcast);

  // Verificar si los CategoryIds son válidos
  const categories = await Category.findAll({
    where: { id: CategoryIds },
  });
  if (categories.length !== CategoryIds.length) {
    throw new Error("Al menos una de las categorías asociadas no existe.");
  }
  const podcastInstance = await Podcast.create({
    title,
    images,
    podcast,
    date,
    UserId,
  });

  await podcastInstance.addCategories(categories);

  return podcastInstance;
};

module.exports = { createPodcast };
