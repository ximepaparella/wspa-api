const {Model, DataTypes, Sequelize} = require('sequelize');

const MEMBERSHIP_TABLE = 'memberships';

const MembershipSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  validationText:{
    allowNull: false,
    type: DataTypes.TEXT(500),
    field: 'validation_text',
  },
  price: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  featuredImage:{
    allowNull: true,
    type: DataTypes.STRING,
  },
  giftVoucherLink: {
    allowNull: true,
    type: DataTypes.STRING,
    field: 'gift_voucher_link',
  },
  // services:{
  //   allowNull: false,
  //   type: DataTypes.ARRAY(DataTypes.STRING),
  // },
  // treatments: {
  //   allowNull: false,
  //   type: DataTypes.ARRAY(DataTypes.STRING),
  // },
  createdAt: {
    allowNull: false,
    field: 'created_at',
    type: DataTypes.STRING,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    allowNull: true,
    field: 'updated_at',
    type: DataTypes.DATE,
  },
}


class Membership extends Model {
  static associate(models) {
    // define association here
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: MEMBERSHIP_TABLE,
      modelName: 'Membership',
      timestamps: false
    }
  }
}

module.exports = { Membership, MembershipSchema, MEMBERSHIP_TABLE };
