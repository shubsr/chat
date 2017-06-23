const express = require("express");
const next = require("next");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
mongoose.connect("mongodb://test:test@ds151461.mlab.com:51461/my_mongo_db");

var Schema = mongoose.Schema;

var nameSchema = new Schema({
  name: { type: String, required: true }
});

var Names = mongoose.model("Names", nameSchema);

const dev = process.env.NODE_ENV !== "production";
const app = next({
  dev
});
const handle = app.getRequestHandler();

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/p/:id", (req, res) => {
      const actualPage = "/post";
      const queryParams = {
        id: req.params.id
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/admin-chat/:code", (req, res) => {
      const actualPage = "/admin-chat";
      const queryParams = {
        code: req.params.code
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/save/:name", (req, res) => {
      var item = { name: req.params.name };
      var data = new Names(item);
      data.save();
      res.send("done");
    });

    server.post("/save", jsonParser, (req, res) => {
      var item = { name: req.body.name };
      var data = new Names(item);
      data.save(function(err, dt) {
        if (err) {
          return res.sendStatus(404);
        }
        return res.json(dt);
      });
    });
    server.get("/admin-chat/:code", (req, res) => {
      return handle(req, res);
    });
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
