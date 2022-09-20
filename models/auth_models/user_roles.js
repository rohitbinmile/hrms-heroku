
'use strict';

module.exports = (sequelize, Sequelize) => {
    const user_roles = sequelize.define("user_roles", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
        user_id: {
        type: Sequelize.INTEGER,
        references: {
            model: "auth_user",
            key: "id",
            onUpdate: "cascade",
            onDelete: "SET NULL"
        }
        },
        role_id: {
        type: Sequelize.INTEGER,
        references: {
            model: "roles",
            key: "id",
            onUpdate: "cascade",
            onDelete: "SET NULL"
        }
        },
        created_at: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    });

    return user_roles;
}