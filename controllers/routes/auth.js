module.exports = function(app, passport) {
  var requireSignup = passport.authenticate("local-signup", {
    successRedirect: "/api/dashboard",
    failureRedirect: "/api/failed"
  });

  var requireLogin = passport.authenticate("local-signin", {
    successRedirect: "/api/dashboard",
    failureRedirect: "/api/failed"
  });

  function tokenForUser(user) {
    var timestamp = new Date().getTime();
    return jwt.encode(
      { sub: user.id, iat: timestamp },
      process.env.PASSPORT_SECRET
    );
  }

  function token(req, res, next) {
    // User has already had their email and password auth'd
    // We just need to give them a token
    res.send({ token: tokenForUser(req.user) });
  }

  app.get("/api/dashboard", isLoggedIn, function(req, res) {
    res.send(req.user);
  });

  app.get("/api/", isLoggedIn, function(req, res) {
    res.send(req.user);
  });

  app.post("/api/signup", requireSignup, token);

  app.post("/api/login", requireLogin, token);

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
