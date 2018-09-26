module.exports = function(sequelize, DataTypes) {
  var tradeHistory = sequelize.define("tradeHistory", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    coinPrice: {
      // check if possible
      type: DataTypes.FLOAT
    },
    usdAmount: {
      type: DataTypes.FLOAT
    },
    coinAmount: {
      type: DataTypes.FLOAT
    },
    tradeType: {
      type: DataTypes.STRING
    },
    cryptoType: {
      type: DataTypes.STRING
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  });
  return tradeHistory;
};
