1. file System....

   a.writeFile() দিয়ে কিভাবে নতুন file create করতে help করে:

    Example:

        const fs = require("fs");

        fs.writeFile("hello.txt", "this is my node.js project", function (err) {
            if (err) {
                console.log("Error");
            } else {
                console.log("done");
            }
        });

    b. appendFile() দিয়ে কিভাবে সেই নতুন file এ  Data Update করতে হয়:

    Example:

        fs.appendFile("hello.txt", ". Keep Learning", function (err) {
            if (err) {
                console.log("Error");
            } else {
                console.log("done");
            }
        });
    
    c. rename() দিয়ে কিভাবে সেই নতুন file কে rename করা যাই:

    Example:

        fs.rename("hello.txt", "hi.txt", function (err) {
            if (err) {
                console.log("Error");
            } else {
                console.log("done");
            }
        });

    d. copyFile() দিয়ে কিভাবে সেই নতুন file কে copy করে অন্ন জায়গায় transfer করা যাই:

    note: 
        <h4>copyFile() Documentation By Ehasun</h4>

        fs.copyFile(src, destination, callback-function){
            
        }

    Example:

        fs.copyFile("hi.txt", "./copy/file-copy.text", function(err) {
            if(err) {
                console.log("err");
            } else {
                console.log("Done");      
            }
        })

    
    e. unlink() দিয়ে কিভাবে সেই নতুন file কে Delete kora jai :

    Example:

        fs.unlink("hi.txt", function(err) {
            if(err) {
                console.log("err");
            } else {
                console.log("Done");      
            }
        })


    f. rmdir() দিয়ে কিভাবে একটা folder ka delete করা যাই:

        Example:

            fs.rmdir("./copy", function(err) {
                if(err) {
                    console.log(err.message);
                } else {
                    console.log("Done");      
                }
            })

        note: এখনে যদি folder ar ভিতরে কোণ কিছু থাকে তাহলে error pabo.. Folder empty takle error pabo na.. এই problem ta fix korar জন্য নিছের example টা follow koron

        Example: 

            fs.rmdir("./copy", {recursive: true}, function(err) {
    if(err) {
        console.log(err.message);
    } else {
        console.log("Done");      
    }
})
    