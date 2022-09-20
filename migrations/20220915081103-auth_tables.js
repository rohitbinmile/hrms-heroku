'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      // Auth user table
      queryInterface.createTable("auth_user", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        first_name: Sequelize.STRING(50),
        last_name: Sequelize.STRING(50),
        phone: Sequelize.STRING(14),
        email: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        profile_pic: {
            type: Sequelize.STRING
        },
        last_login: {
        type: Sequelize.DATE,
        },
        is_deleted: {
            type: Sequelize.BOOLEAN,
            default: false,
            allowNull: false
        },
        is_active: {
        type: Sequelize.BOOLEAN,
        default: true,
        allowNull: false
        },
        created_at: {
            type: Sequelize.DATE,
            default: Sequelize.NOW
        },
        updated_at: {
            type: Sequelize.DATE,
        },
      }),
      // Roles master table
      queryInterface.createTable("roles", {
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
      }),
      
      // User roles mapping table
      queryInterface.createTable("user_roles", {
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
      }),

      // Menu action master table
      queryInterface.createTable("menu_action", {
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
          unique: true,
          allowNull: false
        },
        menu_title:Sequelize.STRING(50),
        level: Sequelize.INTEGER,
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
      }).then(() => 
      // Add constraint to menu action
      queryInterface.addConstraint("menu_action",
        {
          fields: ['parent_id'],
          type: 'foreign_key',
          name: 'fk_menu_action_parent_id',
          references: {
            table: 'menu_action',
            field: 'id'
          }
        })
      // queryInterface.sequelize.query(`
      // ALTER TABLE menu_action ADD CONSTRAINT fk_menu_action_parent_id
      // FOREIGN KEY (parent_id) references menu_action (id);
      // `)
      ),
      // User Permission mapping table
      queryInterface.createTable("user_permissions", {
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
      }),

    ]);
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.dropTable("auth_user"),
      queryInterface.dropTable("roles"),
      queryInterface.dropTable("user_roles"),
      queryInterface.dropTable("menu_action"),
      queryInterface.dropTable("user_permissions")
    ])
  }
};
