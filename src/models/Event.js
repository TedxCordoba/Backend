const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Event', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        images: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
          },
        sponsors: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {timestamps: false});
}