require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_POSTGRE_URL } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);
const basename = path.basename(__filename);

// const sequelize = new Sequelize(DB_POSTGRE_URL, {
//   logging: false, native: false,
//    dialectOptions: {
//     ssl: {
//       require : true,
//     }
//   }});
// const basename = path.basename(__filename);

const modelDefiners = [];

// Directorio de modelos (ruta relativa desde db.js)
const modelsDir = path.join(__dirname, "./models");

// Leer archivos del directorio de modelos
fs.readdirSync(modelsDir)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(modelsDir, file)));
  });

modelDefiners.forEach((model) => model(sequelize));
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { User, Talk, Blog, Category, Event, Podcast } = sequelize.models;

//Relaciones

//Category

Category.belongsToMany(Talk, { through: 'CategoryTalk' });
Talk.belongsToMany(Category, { through: 'CategoryTalk' });

Category.belongsToMany(Blog, { through: 'CategoryBlog' });
Blog.belongsToMany(Category, { through: 'CategoryBlog' });

Category.belongsToMany(Podcast, { through: 'CategoryPodcast' });
Podcast.belongsToMany(Category, { through: 'CategoryPodcast' });

//User

User.hasMany(Talk);
Talk.belongsTo(User);

User.hasMany(Blog);
Blog.belongsTo(User);

User.hasMany(Podcast);
Podcast.belongsTo(User);

// User.belongsToMany(Event, { through: UserEvent });
// Event.belongsToMany(User, { through: UserEvent });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
