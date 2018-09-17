module.exports = function(sequelize, DataTypes) {
  var Portfolio = sequelize.define("Portfolio", {
    totalNet: {
      type: DataTypes.FLOAT,
      allowNull: false,
      default: 10000
    },
    USD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      default: 10000
    },
    BTC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      default: 0
    },
    BTCVal: {
      type: DataTypes.FLOAT,
      default: 0
    },
    ETH: {
      type: DataTypes.FLOAT,
      allowNull: false,
      default: 0
    },
    ETHVal: {
      type: DataTypes.FLOAT,
      default: 0
    },
    XRP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      default: 0
    },
    XRPVal: {
      type: DataTypes.FLOAT,
      default: 0
    },
    LTC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      default: 0
    },
    LTCVal: {
      type: DataTypes.FLOAT,
      default: 0
    }
  });

  // Portfolio.associate = function(models) {
  //   // We're saying that each portfolio should belong to a user
  //   // A portfolio can't be created without a user due to the foreign key constraint
  //   Portfolio.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Portfolio;
};
