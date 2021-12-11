const express = require("express");
const auth = require("../auth/auth");
const Admin = require("../models/admin");

const router = new express.Router();

// create an admin route
router.post("/admin", async (req, res) => {
  const admin = new Admin(req.body);

  try {
    await admin.save();
    const token = await admin.generateAuthToken();
    res.status(201).send({ admin, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

//admin login route
router.post("/admin/login", async (req, res) => {
  try {
    const admin = await Admin.findByCredentials(
      req.body.userName,
      req.body.password
    );

    const token = await admin.generateAuthToken();
    res.send({ admin, token });
  } catch (err) {
    res.status(400).send("something went wrong");
    console.log(err);
  }
});

router.post("/admin/logout", auth, async (req, res) => {
  try {
    req.admin.tokens = req.admin.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.admin.save();

    res.send("logout successfully");
  } catch (err) {}
});

module.exports = router;
