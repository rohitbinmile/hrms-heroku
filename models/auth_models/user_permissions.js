
'use strict';

module.exports = (sequelize, Sequelize) => {
    const user_permissions = sequelize.define("user_permissions", {
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
        menu_id: {
        type: Sequelize.INTEGER,
        references: {
            model: "menu_action",
            key: "id",
            onUpdate: "cascade",
            onDelete: "SET NULL"
        }
        },
        controller:Sequelize.STRING(50),
        action: Sequelize.STRING(50),
        action_description: Sequelize.STRING(60),
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

    return user_permissions;
}