var db = require("../../models");

module.exports = function(app) {
  // TODO:
  // send userdata
  // send userPort
  // update userPort
  // push to tradeHistory
  // push to userTradeHistory

  app.get("/api/user", function(req, res) {
    res.send(req.user);
  });

  app.get("/api/newPort/:userId", function(req, res) {
    db.Portfolio.create({
      totalNet: 100000.0,
      usd: 100000.0,
      btc: 0.0,
      btc_val: 0.0,
      eth: 0.0,
      eth_val: 0.0,
      xrp: 0.0,
      xrp_val: 0.0,
      ltc: 0.0,
      ltc_val: 0.0,
      UserId: req.params.userId
    }).then(function(dbPortfolio) {
      console.log("portfolio-----" + dbPortfolio);
      res.json(dbPortfolio);
    });
  });

  // When user logs on and accesses the dashboard this will be called so that we can access the username/userId/portfolio/history
  app.get("/api/user/:id", function(req, res) {
    db.Portfolio.findOne({
      where: {
        UserId: req.params.id
      },
      include: [db.User]
    }).then(function(portfolio) {
      res.json(portfolio);
    });
  });

  // PUT route for updating users portfolio
  app.put("/api/user/updatePortfolio", function(req, res) {
    db.Portfolio.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbPortfolio) {
      res.json(dbPortfolio);
    });
  });

  app.get("/api/tradeHistory", function(req, res) {
    db.tradeHistory.findAll().then(function(historyData) {
      res.json(historyData);
    });
  });
  // collects data passed in and saves to database's tradehistory table
  app.post("/api/tradeHistory", function(req, res) {
    db.tradeHistory.create(req.body).then(function(historyData) {
      console.log("history data for us to pick apart" + historyData);
      return historyData;
    });
  });

  // TODO: Extra if we want to include all user trade history
  app.post("/api/user/tradeHistory", function(req, res) {
    db.userTradeHistory.create(arguments).then(function(userHistoryData) {
      res.json(userHistoryData);
    });
  });
};
