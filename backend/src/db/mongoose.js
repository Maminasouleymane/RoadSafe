const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
});

// check if the connection is established
// 0 => disconnected, 1 => connected, 2 => connecting, 3 => disconnecting
console.log(mongoose.connection.readyState);
