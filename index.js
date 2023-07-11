const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from leetcode backend");
});

app.listen(port, () => {
  console.log(`The express app is started on ${port}`);
});
