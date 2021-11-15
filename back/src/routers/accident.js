const express = require("express");
const Accident = require("../models/accident");
const router = new express.Router();

router.get("/accidents", (req, res) => {
  res.json({
    type: "accident",
    blessure: "leger",
  });
});

router.post("/accident", (req, res) => {
  res.send("add accidents");
});

module.exports = router;
