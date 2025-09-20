// express server setup
const express = require('express');
const app = express();
const PORT = 3000;

// import user model
const userModel = require('./usermodel');

// for home route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});


// for creating a new user
app.get('/create', async (req, res) => {
    let userCreate = await userModel.create({
       name: "Era paramanic",
       username: "era123",
       email: "era@gmail.com"
    })

    res.send(userCreate);
});

// for reading a user
app.get('/read', async (req, res) => {
    let userRead = await userModel.find()

    res.send(userRead);
})

// for updating a user
app.get('/update', async (req, res) => {

   let userUpdate =  await userModel.findOneAndUpdate(
        { username: "era123" }, // filter
        { name: "Era-orko" },  // update
        {new: true} // option to return the updated document
    )

    res.send(userUpdate);
});

// for deleting a user
app.get('/delete', async (req, res) => {
    let userDelete = await userModel.findOneAndDelete({ username: "era123" })

    res.send(userDelete);
})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

