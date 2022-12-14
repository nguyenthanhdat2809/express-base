const Sequelize = require('sequelize');

const { Model } = Sequelize;
// eslint-disable-next-line import/no-dynamic-require
const sequelize = require(`${__dirname}/../config/env.js`);

class customer_like_service extends Model {}
customer_like_service.init(
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    customer_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    service_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'customer_like_service',
    freezeTableName: true,
    timestamps: false,
  }
);
customer_like_service.associate = (db) => {
  db.customer_like_service.belongsTo(db.customer_info, {
    foreignKey: {
      name: 'customer_id',
    },
  });

  db.customer_like_service.belongsTo(db.service, {
    foreignKey: {
      name: 'service_id',
    },
  });
};

module.exports = () => customer_like_service;
