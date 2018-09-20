var db = require("../models");

module.exports = function(app) {
  // TODO:
  // send userdata
  // send userPort
  // update userPort
  // push to tradeHistory
  // push to userTradeHistory

  // should be able to access username/userId/portfolio/history from this
  app.get("/api/user/:id", function(req, res) {
    db.user
      .findOne({
        where: {
          id: req.params.id
        },
        include: [db.Portfolio]
      })
      .then(function(user) {
        res.json(user);
      });
  });

  // need to send all relavent data for storing to db with proper naming
  function pushToHistoryToDb(
    crypto,
    usdAmount,
    coinAmount,
    transactionType,
    objCrypto
  ) {
    data = arguments;
    console.log("Here we have the arguments data" + data);
    app.post("/api/tradeHistory", function(req, res) {
      db.tradeHistory.create(data).then(function(historyData) {
        req.json(historyData);
        console.log("history data for us to pick apart" + historyData);
        return historyData;
      });
    });
  }
  // need to send all relavent data for storing to db with proper naming
  app.post("/api/user/tradeHistory", function(req, res) {
    db.userTradeHistory.create(arguments).then(function(userHistoryData) {
      res.json(userHistoryData);
    });
  });
};
