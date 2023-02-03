const express = require("express");
const app = express();
const port = 3002;

  app.listen(port, () => {
    console.log(`Running Battlesnake at http://localhost:${port}...`)
  });

  app.get("/", (req, res) => {
    res.send("ok");
  });

  app.post("/start", (req, res) => {
    res.send("ok");
  });

  app.post("/move", (req, res) => {
    res.send("ok");
  });

  app.post("/end", (req, res) => {
    res.send("ok");
  });

  app.use(function(req, res, next) {
    res.set("Server", "battlesnake/github/starter-snake-javascript");
    next();
  })