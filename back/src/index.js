const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const cors = require("cors");
const accident = require("./routers/accident");
require("./db/mongoose");
const { get } = require("https");

const app = express();

const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3004;

app.get("/", function (req, res) {
  res.send("hello there ");
});

app.use(accident);

server.listen(port, () => {
  console.log(`server is up on port ${port} !`);
});
