var express = require("express");
var app = express();
var json = require("./data.json");
var fs = require("fs");

var obj = {
  Name: "Alexander",
  UserEmail: "Alexandern@live.se",
};

app.get("/url", (req, res, next) => {
  res.json(json);
});

app.post("/add", function (req, res) {
  Object.assign(json, obj);
  let data = JSON.stringify(json, null, 2);
  fs.writeFile("API/data.json", data, (err) => {
    if (err) throw err;
    console.log("Data written to file");
  });

  res.send(json);
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
