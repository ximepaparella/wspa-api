const{ Model, DataTypes, Sequelize} = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
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
  password: {
    allowNull: false,
    type: DataTypes.STRING(50)
  },
  email:{
    allowNull: false,
    type: DataTypes.STRING(50),
    unique: true
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING(50),
    defaultValue: 'customer'
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

class User extends Model {
  static associate(models) {
    // define association here
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}

module.exports = { User, UserSchema, USER_TABLE };
