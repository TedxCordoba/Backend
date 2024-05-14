const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Blog",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      images: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    { timestamps: false }
  );
};
