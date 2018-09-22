var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/examples", function (req, res) {
    db.user.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  //Jake api
  app.get("/api/user/:id", function (req, res) {
    db.user
      .findOne({
        where: {
          id: req.params.id
        },
        include: [db.Portfolio]
      })
      .then(function (user) {
        res.json(user);
      });
  });

  // trade hist
  app.post("/api/tradeHistory", function (req, res) {
    db.tradeHistory.create(data).then(function (historyData) {
      req.json(historyData);
      console.log("history data for us to pick apart" + historyData);
      return historyData;
    });
  });
};

app.post("/api/user/tradeHistory", function (req, res) {
  db.userTradeHistory.create(arguments).then(function (userHistoryData) {
    res.json(userHistoryData);
  });
});

app.delete("/api/user/:id"), function(req, res) {
    db.user.destroy({
      where: {
        id: req.params.id
      },
      include: [db.Portfolio]
    }).then(function (user) {
      res.json(user);
    });
  };