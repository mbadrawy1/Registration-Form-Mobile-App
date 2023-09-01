import { DataTypes } from "sequelize";

const defineUserModel = (sequelize) => {
  const User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    userType: {
      type: DataTypes.ENUM("doctor", "normal"),
    },
    latitude: {
      type: DataTypes.FLOAT,
    },
    longitude: {
      type: DataTypes.FLOAT,
    },
  });

  User.associate = (models) => {
    User.hasOne(models.Profile);
  };

  return User;
};

export default defineUserModel;
