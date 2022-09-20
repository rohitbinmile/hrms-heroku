
'use strict';

module.exports = (sequelize, Sequelize) => {
    const roles = sequelize.define("roles", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
        created_by: {
        type: Sequelize.INTEGER,
        references: {
            model: "auth_user",
            key: "id",
            onUpdate: "cascade",
            onDelete: "SET NULL"
        }
        },
        role_name:Sequelize.STRING,
        is_deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
        },
        is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
        },
        created_at: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        updated_at: {
            type: Sequelize.DATE,
        },
    });

    return roles;
}