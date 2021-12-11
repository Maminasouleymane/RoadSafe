const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const cors = require("cors");
const accident = require("./routers/accident");
const admin = require("./routers/admin");
require("./db/mongoose");
const { get } = require("https");

const app = express();

const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.use(accident);
app.use(admin);

const port = process.env.PORT || 3004;

server.listen(port, () => {
  console.log(`server is up on port ${port} !`);
});
