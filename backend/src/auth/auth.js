const jwt = require("jsonwebtoken");
const Admin = require("../models/admin");

const auth = async (req, res, next) => {
  try {
    // const token = req.header("Authorization").replace("Bearer ", "");
    const token = req.body.token;
    console.log(token);
    const decoded = jwt.verify(token, "saferoute");
    const admin = await Admin.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!admin) {
      throw new Error();
    }

    req.token = token;
    req.admin = admin;

    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate sir ." });
  }
};

module.exports = auth;
