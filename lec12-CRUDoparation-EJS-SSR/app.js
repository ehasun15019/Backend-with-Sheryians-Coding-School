const express = require('express');
const app = express();
// path module to handle file paths
const path = require('path');
// coming from user.js
 const userModel = require('./models/user');

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// home route
app.get('/', (req, res) => {
    res.render("index");
});

// read route
app.get('/read', async (req, res) => {
   let users = await userModel.find();
    res.render("read", { users });
})

// create route
app.post('/create', async (req, res) => {
    let { name, email, image } = req.body;

    let createdUser = await userModel.create({
        name: name,
        email: email,
        image: image
    })

    res.redirect("/read");
});

// delete route with user's id
app.get('/delete/:id', async (req, res) => {
    let users = await userModel.findByIdAndDelete({_id: req.params.id});
    res.redirect("/read");
})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});