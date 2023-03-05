const express = require( "express" );
const mongoose = require("mongoose");

const app = express();

app.get("/video", (req, res) => {
  res.send(`video on asia southest 1`);
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
