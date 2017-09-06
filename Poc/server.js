var express = require("express");

var app = express();

app.use(express.static(_dirname+"/../Poc"));

app.lisen(8080);
