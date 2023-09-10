const{ Model, DataTypes, Sequelize} = require('sequelize');

const TREATMENTS_TABLE = 'treatments';

const TreatmentSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING(50)
  },
  aditionals: {
    allowNull: true,
    type: DataTypes.STRING(50)
  },
  duration: {
    allowNull: true,
    type: DataTypes.INTEGER
  },
  description: {
    allowNull: false,
    type: DataTypes.TEXT(500)
  },
  price: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  salePrice:{
    allowNull: true,
    type: DataTypes.INTEGER,
    field: 'sale_price',
  },
  giftLinkId: {
    allowNull: true,
    type: DataTypes.INTEGER,
    field: 'gift_link_id',
  },
  category: {
    allowNull: false,
    type: DataTypes.STRING(50)
  },
  createdAt: {
    allowNull: false,
    field: 'created_at',
    type: DataTypes.STRING(50),
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    allowNull: true,
    field: 'updated_at',
    type: DataTypes.DATE,
  }
}

class Treatment extends Model {
  static associate(models) {
    // define association here
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: TREATMENTS_TABLE,
      modelName: 'Treatment',
      timestamps: false
    }
  }
}

module.exports = { Treatment, TreatmentSchema, TREATMENTS_TABLE };

