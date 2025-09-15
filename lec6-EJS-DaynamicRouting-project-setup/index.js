const express = require("express");
const app = express();
const PORT = 3000;

// for from handling
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set Ejs
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.send("This is a Ehasun_dev");
});

app.listen(PORT, function () {
  console.log(`Server is running on http://localhost:${PORT}`);
});
