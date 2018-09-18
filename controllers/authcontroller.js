var exports = (module.exports = {});

exports.login = function(req, res) {
  res.render("login");
};

exports.dashboard = function(req, res) {
  res.render("dashboard");
};

exports.logout = function(req, res) {
  req.session.destroy(function() {
    res.redirect("login");
  });
};
