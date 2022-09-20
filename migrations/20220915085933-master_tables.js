'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.createTable("clients", {
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
        name:Sequelize.STRING,
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
      }),
      queryInterface.createTable("designations", {
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
        designation_name:Sequelize.STRING,
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
      })
    ]);
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.dropTable("clients"),
      queryInterface.dropTable("designations")
    ]);
  }
};
