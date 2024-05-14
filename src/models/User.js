const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        banner: {
            type: DataTypes.STRING,
            allowNull: true
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },  
        bio:{
            type: DataTypes.STRING,
            allowNull: true
        },
        twitter:{
            type: DataTypes.STRING,
            allowNull: true
        },
        instagram:{
            type: DataTypes.STRING,
            allowNull: true
        },
        linkedin:{
            type: DataTypes.STRING,
            allowNull: true
        },
        youtube:{
            type: DataTypes.STRING,
            allowNull: true
        },
        facebook:{
            type: DataTypes.STRING,
            allowNull: true
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        isMember: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        isOrador: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        isTeam: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    }, {timestamps: false});
}