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