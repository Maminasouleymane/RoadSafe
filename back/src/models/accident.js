const mongoose = require("mongoose");

const accidentSchema = new mongoose.Schema({
  danger: {
    type: "string",
    required: false,
    trim: true,
  },
  vehiculeType: {
    type: "string",
    required: false,
    trim: true,
  },
  blessure: {
    type: "string",
    required: !true,
    trim: true,
  },
  genre: {
    type: "string",
    required: false,
    trim: true,
  },
  commentaire: {
    type: "string",
    required: false,
    trim: true,
  },
  images: {
    type: Buffer,
  },
});

const Accident = mongoose.model("Accident", accidentSchema);

module.exports = Accident;
