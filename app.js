const express = require("express");

const app = express();
app.use(express.static("static"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server running at PORT 3000");
});
