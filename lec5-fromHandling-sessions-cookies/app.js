const express = require("express");
const app = express();

const PORT = 3000;

// for cookies instriming
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middleware
app.use(function (req, res, next) {
  console.log("This is a middleware ");

  next();
});

// Custom error-handling middleware
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: "Oops! Something went wrong." });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
