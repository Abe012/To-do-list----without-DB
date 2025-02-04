const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
console.log(date);
const app = express();
let items = ["Buy food", "Cook food", "Eat food"];
let workItems = [];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", function (req, res) {
  day = date.day();
  res.render("list", { listTitle: day, newItemLists: items });
});
app.post("/", function (req, res) {
  let item = req.body.newItem;
  if (req.body.list === "Work-List") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});
app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work-List", newItemLists: workItems });
});
app.post("/work", function (req, res) {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
