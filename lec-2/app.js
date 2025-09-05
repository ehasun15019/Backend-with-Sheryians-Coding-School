const fs = require("fs");

// fs.writeFile("hello.txt", "this is my node.js project", function (err) {
//   if (err) {
//     console.log("Error");
//   } else {
//     console.log("done");
//   }
// });

// fs.appendFile("hello.txt", ". Keep Learning", function (err) {
//   if (err) {
//     console.log("Error");
//   } else {
//     console.log("done");
//   }
// });


// fs.rename("hello.txt", "hi.txt", function (err) {
//   if (err) {
//     console.log("Error");
//   } else {
//     console.log("done");
//   }
// });

// fs.copyFile("hi.txt", "./copy/file-copy.text", function(err) {
//     if(err) {
//         console.log("err");
//     } else {
//         console.log("Done");      
//     }
// })

// fs.unlink("hi.txt", function(err) {
//     if(err) {
//         console.log("err");
//     } else {
//         console.log("Done");      
//     }
// })


fs.rmdir("./copy", {recursive: true}, function(err) {
    if(err) {
        console.log(err.message);
    } else {
        console.log("Done");      
    }
})