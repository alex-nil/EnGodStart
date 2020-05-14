var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var json = require("./data.json");
var fs = require("fs");
app.use(express.json());

var obj = {
  Name: "Alexander",
  UserEmail: "Alexandern@live.se",
};

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/url", (req, res, next) => {
  res.json(json);
});

app.post("/add", function (req, res) {
  const info = {
    username: req.body.username,
    email: req.body.email,
  };

  let data = JSON.stringify(info, null, 2);
  fs.writeFile("API/data.json", data, (err) => {
    if (err) throw err;
    console.log("Here it is: " + data);
    console.log("Data written to file");
  });

  res.send(json);
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
