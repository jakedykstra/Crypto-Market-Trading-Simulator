module.exports = function(sequelize, DataTypes) {
  var Portfolio = sequelize.define(
    "Portfolio",
    {
      totalNet: {
        type: DataTypes.FLOAT,
        default: 10000.0
      },
      usd: {
        type: DataTypes.FLOAT,
        default: 10000.0
      },
      btc: {
        type: DataTypes.FLOAT,
        default: 0.0
      },
      btc_val: {
        type: DataTypes.FLOAT,
        default: 0.0
      },
      eth: {
        type: DataTypes.FLOAT,
        default: 0.0
      },
      eth_val: {
        type: DataTypes.FLOAT,
        default: 0.0
      },
      xrp: {
        type: DataTypes.FLOAT,
        default: 0.0
      },
      xrp_val: {
        type: DataTypes.FLOAT,
        default: 0.0
      },
      ltc: {
        type: DataTypes.FLOAT,
        default: 0.0
      },
      ltc_val: {
        type: DataTypes.FLOAT,
        default: 0.0
      }
      // UserId: {
      //   type: DataTypes.BIGINT,
      //   allowNull: false
      // }
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
