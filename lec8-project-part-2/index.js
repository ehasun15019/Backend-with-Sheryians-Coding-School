const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
const fs = require("fs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// for public folder creation
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// for home page 
app.get("/", (req, res) => {
  fs.readdir(`./files`, function (err, files) {
    res.render("index", { files: files });
  });
});

// for filedata page 
app.get("/file/:filename", (req, res) => {
  fs.readFile(`./files/${req.params.filename}`, "utf-8", function(err, filedata) {
   res.render("show", { filename: req.params.filename, filedata: filedata });
  })
});

// for creating task management
app.post("/create", (req, res) => {

  const fileName = req.body.title.split(" ").join("") + ".txt"; 
  const filePath = `./files/${fileName}`;

  fs.writeFile(filePath, req.body.details, function(err){
    res.redirect("/");
  })
});

app.listen(PORT, function () {
  console.log(`server on the http://localhost:${PORT}`);
});
