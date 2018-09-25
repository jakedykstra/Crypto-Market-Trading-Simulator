module.exports = function(sequelize, DataTypes) {
  var Portfolio = sequelize.define(
    "Portfolio",
    {
      totalNet: {
        type: DataTypes.FLOAT,
        default: 10000.0
      },
      USD: {
        type: DataTypes.FLOAT,
        default: 10000.0
      },
      BTC: {
        type: DataTypes.FLOAT,
        default: 0.0
      },
      BTC_Val: {
        type: DataTypes.FLOAT,
        default: 0.0
      },
      ETH: {
        type: DataTypes.FLOAT,
        default: 0.0
      },
      ETHVal: {
        type: DataTypes.FLOAT,
        default: 0.0
      },
      XRP: {
        type: DataTypes.FLOAT,
        default: 0.0
      },
      XRP_Val: {
        type: DataTypes.FLOAT,
        default: 0.0
      },
      LTC: {
        type: DataTypes.FLOAT,
        default: 0.0
      },
      LTC_Val: {
        type: DataTypes.FLOAT,
        default: 0.0
      }
    },
    {
      timestamps: false
    }
  );

  Portfolio.associate = function(models) {
    // We're saying that each portfolio should belong to a user
    // A portfolio can't be created without a user due to the foreign key constraint
    Portfolio.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Portfolio;
};
