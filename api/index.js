const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.sendFile("/index.html");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server running at PORT 3000");
});
