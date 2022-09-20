'use strict';

const fs = require('fs');
const path = require('path');
const { CommandCompleteMessage } = require('pg-protocol/dist/messages');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
// Take the dirs path for the models to export
let MODELS_DIRS = [__dirname, __dirname + '/auth_models']

for(let dir of MODELS_DIRS) {
  fs.readdirSync(dir)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
      })
    .forEach(file => {
      const model = require(path.join(dir, file))(sequelize, Sequelize.DataTypes);
      db[model.name] = model;
    });
  }

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
