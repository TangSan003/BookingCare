'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DoctorInfor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DoctorInfor.init({
    doctorId: DataTypes.STRING,
    priceId: DataTypes.STRING,
    provinceId: DataTypes.STRING,
    paymentId: DataTypes.STRING,
    addressClinic: DataTypes.STRING,
    nameClinic: DataTypes.BOOLEAN,
    note: DataTypes.STRING,
    count: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DoctorInfor',
  });
  return DoctorInfor;
};