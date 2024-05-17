const { Event, User } = require("../../db");
const { validateImg } = require("../../utils/validateImg");
const { validateOrador } = require("../../utils/validateOrador");

const createEvent = async ({
  title,
  description,
  date,
  images,
  imageBanner,
  sponsors,
  UserIds,
}) => {

  images && images.forEach((img) => {
    validateImg(img);
  });

  validateImg(imageBanner);

  if (UserIds) {
    for (const userId of UserIds) {
      // Aquí llamamos a la función validateOrador con el ID de usuario
      await validateOrador(userId);
    }
  }

  const oradores = await User.findAll({
    where: { id: UserIds },
  });
  if (oradores.length !== UserIds.length) {
    throw new Error("Error al seleccionar los oradores.");
  }

  const newEvent = await Event.create({
    title,
    description,
    date,
    images,
    imageBanner,
    sponsors,
  });

  await newEvent.addUsers(oradores);

  return newEvent;
};

module.exports = { createEvent };
