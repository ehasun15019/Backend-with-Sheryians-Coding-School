const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path")

// for from handling
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// setting up public static file 
app.use(express.static(path.join(__dirname, 'public')))

// set Ejs
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index");
});

app.listen(PORT, function () {
  console.log(`Server is running on http://localhost:${PORT}`);
});
