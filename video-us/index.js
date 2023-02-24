const express = require("express");
const app = express();

app.get("/video", (req, res) => {
  res.send(`video on us central`);
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
