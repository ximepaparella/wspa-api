const{ Model, DataTypes, Sequelize} = require('sequelize');

const INFORMATION_TABLE = 'information';

const InformationSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  address: {
    allowNull: false,
    type: DataTypes.STRING(100),
  },
  whatsapp: {
    allowNull: false,
    type: DataTypes.STRING(50),
  },
  // times: {
  //   allowNull: false,
  //   type: DataTypes.ARRAY(DataTypes.STRING(50)),
  // },
  copyright:{
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
    type: DataTypes.STRING(250),
  },
  bookingsText: {
    allowNull: false,
    type: DataTypes.STRING(250),
  },
  cancelingText: {
    allowNull: false,
    type: DataTypes.STRING(250),
  },
  pricesText: {
    allowNull: false,
    type: DataTypes.STRING(250),
  },
  circuitText: {
    allowNull: false,
    type: DataTypes.STRING(250),
  },
  paymentText: {
    allowNull: false,
    type: DataTypes.STRING(250),
  },
  giftText: {
    allowNull: false,
    type: DataTypes.STRING(250),
  },
  personalCareText: {
    allowNull: false,
    type: DataTypes.STRING(250),
  },
  pregnantText: {
    allowNull: false,
    type: DataTypes.STRING(250),
  }
}

class Information extends Model {
  static associate(models) {
    // define association here
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: INFORMATION_TABLE,
      modelName: 'Information',
      timestamps: false
    }
  }
}

module.exports = { Information, InformationSchema, INFORMATION_TABLE };
