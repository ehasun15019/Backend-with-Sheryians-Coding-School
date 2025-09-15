const express = require("express");
const app = express();

// for from handling
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
