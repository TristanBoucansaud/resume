const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/templates/main.html"));
});

app.use("/styles", express.static(path.join(__dirname, "/styles")));
app.use("/assets", express.static(path.join(__dirname, "/assets")));
app.use("/scripts", express.static(path.join(__dirname, "/scripts")));

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

module.exports = app;
