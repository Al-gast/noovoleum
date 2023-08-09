const express = require("express");
const path = require("path");
const app = express();
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables from .env

const port = process.env.PORT || 3000; // Default to 3000 if PORT is not defined in .env

app.use("/", express.static(path.join(__dirname, "public")));

// app.use("/blog", express.static(path.join(__dirname, "public/blog-page.html")));

app.use((req, res) => {
  res.status(404);
  res.sendFile(path.join(__dirname, "public/404.html"));
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
