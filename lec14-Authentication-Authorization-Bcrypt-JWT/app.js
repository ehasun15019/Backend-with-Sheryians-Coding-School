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