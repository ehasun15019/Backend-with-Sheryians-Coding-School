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