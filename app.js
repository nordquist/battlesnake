const express = require("express");
const app = express();
const host = '0.0.0.0';
const port = process.env.PORT || 3002;

  app.get("/", (req, res) => {
    res.send(handlers.info());
  });

  app.post("/start", (req, res) => {
    handlers.start(req.body);
    res.send("ok");
  });

  app.post("/move", (req, res) => {
    res.send(handlers.move(req.body));
  });

  app.post("/end", (req, res) => {
    handlers.end(req.body);
    res.send("ok");
  });

  app.use(function(req, res, next) {
    res.set("Server", "battlesnake/github/starter-snake-javascript");
    next();
  })

  app.listen(port, host, () => {
    console.log(`Running Battlesnake at http://${host}:${port}...`)
  });