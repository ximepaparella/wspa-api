const{ Model, DataTypes, Sequelize} = require('sequelize');

const SPA_DAY_TABLE = 'spa_days';

const SpaDaySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name:{
    allowNull: false,
    type: DataTypes.STRING(50),
  },
  featuredImage: {
    allowNull: false,
    type: DataTypes.STRING(50),
    field: 'featured_image',
  },
  featuredHome: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: 'featured_home',
  },
  description: {
    allowNull: false,
    type: DataTypes.TEXT(500),
  },
  priceOnly: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'price_only',
  },
  priceDouble: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'price_double',
  },
  duration: {
    allowNull: false,
    type: DataTypes.STRING(50),
  },
  discount: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  giftVoucherOnlyId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'gift_voucher_only_id',
  },
  giftVoucherDoubleId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'gift_voucher_double_id',
  },
  services: {
    allowNull: false,
    type: DataTypes.ARRAY(DataTypes.STRING(50)),
  },
  treatments: {
    allowNull: false,
    type: DataTypes.ARRAY(DataTypes.STRING(50)),
  },
  createdAt: {
    allowNull: false,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
    type: DataTypes.STRING(50),
},
updatedAt: {
    allowNull: true,
    field: 'updated_at',
    type: DataTypes.DATE,
  }
}

class SpaDay extends Model {
  static associate(models) {
    // define association here
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: SPA_DAY_TABLE,
      modelName: 'SpaDay',
      timestamps: false
    }
  }
}

module.exports = { SpaDay, SpaDaySchema, SPA_DAY_TABLE };
