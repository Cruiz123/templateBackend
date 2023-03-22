import { sequelizeConfig as db } from '../config'
const { DataTypes: type, Model } = require('sequelize')

class CountryModel extends Model {}

CountryModel.init(
  {
    id: {
      autoIncrement: true,
      type: type.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    name: {
      type: type.STRING(50),
      allowNull: false
    },
    capital: {
      type: type.STRING(100),
      allowNull: false
    },
    cca3: {
      type: type.STRING(10),
      allowNull: false
    },
    callingcode: {
      type: type.STRING(10),
      allowNull: false
    },
    timezones: {
      type: type.STRING(100),
      allowNull: false
    },
    flagsvg: {
      type: type.STRING(200),
      allowNull: false
    }
  },
  {
    sequelize: db,
    modelName: 'country'
  }
)

module.exports = CountryModel
