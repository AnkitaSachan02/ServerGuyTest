let router = require("express").Router();
let passport = require("passport");

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

router.get("/redirect", passport.authenticate("google"), (req, res) => {
	console.log("called>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
  res.redirect(`http://localhost:3000/signup/`);
});

router.get( "/facebook", passport.authenticate("facebook"));

router.get("/fredirect", passport.authenticate("facebook"), (req, res) => {
	console.log("called>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
  res.redirect(`http://localhost:3000/signup/`);
});


module.exports = router;
