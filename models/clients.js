'use strict';

module.exports = (sequelize, DataTypes) => {
    const clients = sequelize.define("clients", {
      created_by: {
        type: DataTypes.INTEGER,
        references: {
          model: "auth_user",
          key: "id",
          onUpdate: "cascade",
          onDelete: "SET NULL"
        }
      },
      name:DataTypes.STRING,
      is_deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
      },
      created_at: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW
      },
      updated_at: {
          type: DataTypes.DATE,
      },
    },
    {
      timestamps: false
    });
    return clients;
}