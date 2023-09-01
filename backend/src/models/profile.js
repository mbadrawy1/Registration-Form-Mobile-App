import { DataTypes } from "sequelize";

const defineProfileModel = (sequelize) => {
  const Profile = sequelize.define("Profile", {
    specialization: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    workingHours: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
  });

  Profile.associate = (models) => {
    Profile.belongsTo(models.User);
  };

  return Profile;
};

export default defineProfileModel;
