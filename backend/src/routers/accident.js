const express = require("express");
const Accident = require("../models/accident");
const multer = require("multer");
const sharp = require("sharp");
const router = new express.Router();

// const storage = multer.memoryStorage();

const storage = multer.diskStorage({
  destination: (rea, file, callback) => {
    callback(null, "../front/public/uploads/");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype == "text/plain") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage,
});

// var upload = multer({ storage: storage });

// add new accident to treatment area
router.post("/accident", upload.single("photo"), async (req, res) => {
  const image = await req.file.filename;
  console.log("=>  ", req.file.filename);
  const accident = await new Accident({
    ...req.body,
    coordinates: JSON.parse(req.body.coordinate),
    images: image,
  });
  console.log(JSON.parse(req.body.coordinate));
  try {
    await accident.save();
    res.status(201).send("added SUCCEFULY");
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

// display confirmed accident
router.get("/accidents", async (req, res) => {
  try {
    const accident = await Accident.find({ confirmed: false });
    res.status(200).send(accident);
  } catch (e) {
    res.status(500).send("something ain't right now");
  }
});

//update ( confirm accident )
router.patch("/accident/:id", async (req, res) => {
  const updates = Object.keys(req.body);

  try {
    const accident = await Accident.findOne({ _id: req.params.id });

    if (!accident) {
      return res.status(404).send("Accident not found");
    }

    updates.forEach((update) => (accident[updates] = req.body[update]));
    await accident.save();
    res.status(202).send(accident);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
