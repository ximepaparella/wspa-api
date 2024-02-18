const { Model, DataTypes, Sequelize } = require('sequelize');

const INFORMATION_TABLE = 'information';

const InformationSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  address: {
    allowNull: false,
    type: DataTypes.STRING(100),
  },
  whatsapp: {
    allowNull: false,
    type: DataTypes.STRING(50),
  },
  times: {
    allowNull: false,
    type: DataTypes.STRING(150),
  },
  copyright: {
    allowNull: false,
    type: DataTypes.STRING(150),
  },
  whatsappText: {
    allowNull: false,
    type: DataTypes.STRING(150),
    field: 'whatsapp_text',
  },
  whatsappLink: {
    allowNull: false,
    type: DataTypes.STRING(150),
    field: 'whatsapp_link',
  },
  facebookLink: {
    allowNull: false,
    type: DataTypes.STRING(50),
  },
  instagramLink: {
    allowNull: false,
    type: DataTypes.STRING(50),
  },
  policesText: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  bookingsText: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  cancelingText: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  pricesText: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  circuitText: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  paymentText: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  giftText: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  personalCareText: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  pregnantText: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
};

class Information extends Model {
  static associate(models) {
    // define association here
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: INFORMATION_TABLE,
      modelName: 'Information',
      timestamps: false,
    };
  }
}

module.exports = { Information, InformationSchema, INFORMATION_TABLE };
