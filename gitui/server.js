var express = require("express");
var cors = require("cors");
var gitRouter = require("./routes/git_search");
var bodyParser = require("body-parser");
let passportSetup = require("./passportSetup");
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/git", gitRouter);

app.listen(8081, () => {