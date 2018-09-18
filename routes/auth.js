var authController = require("../controllers/authcontroller.js");

module.exports = function(app, passport) {
  app.get("/login", authController.login);

  app.get("/logout", authController.logout);

  app.get("/dashboard", isLoggedIn, authController.dashboard);

  app.post(
    "/login",
    // checker for submit button - signup vs signin
    // if signup
    passport.authenticate("local-signup", {
      successRedirect: "/dashboard",
      failureRedirect: "/login"
    })
    // if signin
    //   passport.authenticate('local-signin', {
    //     successRedirect: '/dashboard',
    //     failureRedirect: '/signin'
    // }
  );

  //middleware for checking whether the user is logged in
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }

    res.redirect("/login");
  }
};
