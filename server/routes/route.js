const express = require("express");
const Router = express.Router();

// connect to the database
const dbo = require("../db/connection");

// convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


Router.route("/products").get(function (req, res) {
    let db_connect = dbo.getDb("Fezzane");
    db_connect
        .collection("records")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// This section will help you get a single record by id
Router.route("/products/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect
        .collection("records")
        .findOne(myquery, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// This section will help you create a new record.
Router.route("/products/add").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
        product_name: req.body.product_name,
        price: req.body.price,
        product_description: req.body.product_description,
        image_url: req.body.image_url,
    };
    db_connect.collection("records").insertOne(myobj, function (err, res) {
        if (err) throw err;
        response.json(res);
    });
});

// This section will help you update a record by id.
Router.route("/update/:id").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    let newvalues = {
        $set: {
            product_name: req.body.product_name,
            price: req.body.price,
            product_description: req.body.product_description,
            image_url: req.body.image_url,
        },
    }
    db_connect.collection("records").updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        response.json(res);
    });
});

// This section will help you delete a record
Router.route("/:id").delete((req, response) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect.collection("records").deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        response.json(obj);
    });
});

module.exports = Router;