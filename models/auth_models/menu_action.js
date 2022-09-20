
'use strict';

module.exports = (sequelize, Sequelize) => {
    const menu_action = sequelize.define("menu_action", {
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
        parent_id: {
        type: Sequelize.INTEGER,
        references: {
            model: "menu_action",
            key: "id",
            onUpdate: "cascade",
            onDelete: "SET NULL"
        }
        },
        menu_title:Sequelize.STRING(50),
        level: Sequelize.INTEGER(3),
        slug: Sequelize.STRING(50),
        img_url: Sequelize.TEXT,
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

    return menu_action;
}