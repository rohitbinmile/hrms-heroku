
'use strict';

module.exports = (sequelize, DataTypes) => {
    const auth_user = sequelize.define("auth_user", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        first_name: DataTypes.STRING(50),
        last_name: DataTypes.STRING(50),
        phone: DataTypes.STRING(14),
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        profile_pic: {
            type: DataTypes.STRING
        },
        last_login: {
        type: DataTypes.DATE,
        },
        is_deleted: {
            type: DataTypes.BOOLEAN,
            default: false,
            allowNull: false
        },
        is_active: {
        type: DataTypes.BOOLEAN,
        default: true,
        allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            default: DataTypes.NOW
        },
        updated_at: {
            type: DataTypes.DATE,
        },
    },
    {
        timestamps: false,
        freezeTableName: true
    });

    return auth_user;
}