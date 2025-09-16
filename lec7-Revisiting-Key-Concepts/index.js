const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
const fs = require("fs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  fs.readdir(`./files`, function(err, files) {
    console.log(files);
    
  });

  res.render("index");
});

app.listen(PORT, function () {
  console.log(`server on the http://localhost:${PORT}`);
});
