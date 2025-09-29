1. install JWT and bcrypt
2. install express
3. install cookie-parser



## How to set cookies

Example: 

    const express = require("express");
    const app = express();

    const cookieParser = require('cookie-parser');
    app.use(cookieParser());

    const PORT = 3000;

    app.get("/", (req, res) => {
        res.cookie("name", "EhasunUlIslam");
        res.send("done");
    });

    // red operation on cookies
    app.get("/read", (req, res) => {
        console.log(req.cookies);
        res.send("read page");
    });

    app.listen(PORT, ()=> {
        console.log(`Server is running on http://localhost:${PORT}`);
    })


## How to work inception with bcrypt

Example: 

    const express = require("express");
    const app = express();

    // require bcrypt
    const bcrypt = require("bcrypt")

    const PORT = 3000;

    app.get("/", (req, res) => {
        // go to npm website and search bcrypt then you get it
        bcrypt.genSalt(11, function(err, salt) {
            bcrypt.hash("wp-1615019", salt, function(err, hash) {
                console.log(hash);
            });
        });
    });


    app.listen(PORT, ()=> {
        console.log(`Server is running on http://localhost:${PORT}`);
    })


## How to work compare/decryption with bcrypt

Example: 

    const express = require("express");
    const app = express();

    // require bcrypt
    const bcrypt = require("bcrypt")

    const PORT = 3000;

    app.get("/", (req, res) => {
        // in this code compare that is the password true ot false
        bcrypt.compare("wp-1615019", "$2b$11$nkVmOp2J9xtoeYh.huOXyOigZak3y/gNQZ0ziieHZmpTwPepunz.u", function(err, result) {
            console.log(result);
        });
    });


    app.listen(PORT, ()=> {
        console.log(`Server is running on http://localhost:${PORT}`);
    })