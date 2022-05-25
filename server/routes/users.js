const express = require("express");
const Router = express.Router();

// connect to the database
const dbo = require("../db/connection");

Router.route("/auth").get(function (req, res) {
    let db_connect = dbo.getDb("Fezzane");
    db_connect
        .collection("users")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

Router.route("/auth").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
        username: req.body.username,
        password: req.body.password,
    };
    db_connect.collection("users").insertOne(myobj, function (err, res) {
        if (err) throw err;
        response.json(res);
    });
});

module.exports = Router;