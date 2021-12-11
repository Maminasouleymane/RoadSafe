const mongoose = require("mongoose");

const accidentSchema = new mongoose.Schema({
  coordinates: [
    {
      type: "Number",
    },
  ],
  danger: {
    type: "string",
    default: "accident",
    required: false,
    trim: true,
  },
  vehiculeType: {
    type: "string",
    default: "voiture",
    required: false,
    trim: true,
  },
  blessure: {
    type: "string",
    default: "leger",
    required: !true,
    trim: true,
  },
  genre: {
    type: "string",
    default: "mixte",
    required: false,
    trim: true,
  },
  commentaire: {
    type: "string",
    required: false,
    trim: true,
  },
  confirmed: {
    type: "boolean",
    default: false,
    required: !true,
  },
  images: {
    type: "String",
  },
});

const Accident = mongoose.model("Accident", accidentSchema);

module.exports = Accident;
