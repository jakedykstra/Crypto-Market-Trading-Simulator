module.exports = function(app, passport) {
  app.get("/api/dashboard", isLoggedIn, function(req, res) {
    res.send(req.user);
  });

  app.get("/api/", isLoggedIn, function(req, res) {
    res.send(req.user);
  });

  app.post(
    "/api/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/api/dashboard",
      failureRedirect: "/api/failed"
    })
  );

  app.post(
    "/api/login",
    passport.authenticate("local-signin", {
      successRedirect: "/api/dashboard",
      failureRedirect: "/api/failed"
    })
  );

  //middleware for checking whether the user is logged in
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/login");
    res.send({ login: failed });
    console.log("not authenticated");
  }
};
