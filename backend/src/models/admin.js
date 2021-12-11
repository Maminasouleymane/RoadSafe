const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// create the schema
const adminSchema = new mongoose.Schema({
  userName: {
    type: "String",
    required: true,
    trim: true,
  },
  password: {
    type: "String",
    required: true,
    trim: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// generate auth token for admin
adminSchema.methods.generateAuthToken = async function () {
  const admin = this;
  const token = jwt.sign({ _id: admin._id.toString() }, "saferoute");

  admin.tokens = admin.tokens.concat({ token });
  await admin.save();
  return token;
};

// find admin by crentials
adminSchema.statics.findByCredentials = async (userName, password) => {
  const admin = await Admin.findOne({ userName });

  if (!admin) {
    throw new Error("Unable to login admin doesn t exist  ");
  }
  const isMatch = await bcrypt.compare(password, admin.password);

  if (!isMatch) {
    throw new Error("Unable to login password doesn t match ");
  }

  return admin;
};

// Hash the plain text password before saving
adminSchema.pre("save", async function (next) {
  const admin = this;

  if (admin.isModified("password")) {
    admin.password = await bcrypt.hash(admin.password, 8);
  }

  next();
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
