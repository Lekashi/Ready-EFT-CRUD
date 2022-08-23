const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Raid extends Model {}

Raid.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    map: {
      type: DataTypes.STRING,
    },
    maptime: {
      type: DataTypes.STRING,
    },
    deployingtime: {
      type: DataTypes.STRING,
    },
    raidtime: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    survived: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Raid",
  }
);

module.exports = Raid;
