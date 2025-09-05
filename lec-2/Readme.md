1. file System....

   a.writeFile() কিভাবে নতুন file create করতে help করে

   Example:
    const fs = require("fs");

    fs.writeFile("hello.txt", "this is my node.js project", function (err) {
        if (err) {
            console.log("Error");
        } else {
            console.log("done");
        }
    });
