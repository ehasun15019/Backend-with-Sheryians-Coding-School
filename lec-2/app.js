const fs = require("fs");

fs.writeFile("hello.txt", "this is my node.js project", function (err) {
  if (err) {
    console.log("Error");
  } else {
    console.log("done");
  }
});
