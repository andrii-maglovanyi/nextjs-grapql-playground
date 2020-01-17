import * as fs from "fs";
import * as path from "path";

import { Sequelize } from "sequelize";

const config = require(path.resolve(__dirname, "..", "config", "config.js"))[
  process.env.NODE_ENV || "development"
];

const sequelize = new Sequelize(config);

const basename = path.basename(__filename);
const models = {};

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      !file.startsWith(".") &&
      file !== basename &&
      (file.endsWith(".ts") || file.endsWith(".js"))
    );
  })
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    models[model.name] = model;
  });

sequelize.models.Subject.hasMany(sequelize.models.Topic, {
  sourceKey: "id",
  foreignKey: "subject_id",
  as: "topics",
});
sequelize.models.Topic.belongsTo(sequelize.models.Subject, {
  as: "subject",
});

sequelize.models.Topic.hasOne(sequelize.models.Quiz, {
  sourceKey: "id",
  foreignKey: "topic_id",
  as: "quiz",
});
sequelize.models.Quiz.belongsTo(sequelize.models.Topic, {
  as: "topic",
});

sequelize.models.Topic.belongsToMany(sequelize.models.User, {
  through: sequelize.models.UserProgress,
  as: "users",
  foreignKey: "topic_id",
  otherKey: "user_id",
});
sequelize.models.User.belongsToMany(sequelize.models.Topic, {
  through: sequelize.models.UserProgress,
  as: "progress",
  foreignKey: "user_id",
  otherKey: "topic_id",
});

export { sequelize };

export default models;
