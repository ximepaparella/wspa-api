const{ Model, DataTypes, Sequelize} = require('sequelize');

const WATTER_CIRCUIT_TABLE = 'watter_circuits';

const WatterCircuitSchema = {
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
  includes: {
    allowNull: false,
    type: DataTypes.STRING(50),

  },
  clientPrice: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'client_price',
  },
  visitorPrice: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'visitor_price',
  },
  times: {
    allowNull: false,
    type: DataTypes.STRING(150),
    field: 'times'
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

class WatterCircuit extends Model {
  static associate(models) {
    // define association here
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: WATTER_CIRCUIT_TABLE,
      modelName: 'WatterCircuit',
      timestamps: false
    }
  }
}

module.exports = { WatterCircuit, WatterCircuitSchema, WATTER_CIRCUIT_TABLE };
