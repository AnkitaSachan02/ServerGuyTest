var express = require("express");
var cors = require("cors");
var gitRouter = require("./routes/git_search");
var bodyParser = require("body-parser");
var app = express();
let passport = require("passport");
let authRouter = require("./routes/authRouter");
let passportSetup = require("./passportSetup");
let database = require("./mySql");
app.use(cors());

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/auth", authRouter);
app.use("/git", gitRouter);

app.listen(8081, () => {
  console.log("server running at 8081");
});