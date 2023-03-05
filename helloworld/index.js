const express = require("express");
const mongoose = require("mongoose");
const User = require("./userModel");
const app = express();
app.use(express.json());

const uri =
  "mongodb+srv://ashley0147:Toukenranbu01@cluster0.571vhmh.mongodb.net/?retryWrites=true&w=majority";
async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to db");
  } catch (error) {
    console.error(error);
  }
}
connect();
app.post("/api/user", async function (req, res) {
  console.log(req.body);
  try {
    const newUser = await User.create({
      name: req.body.name,
      imageURL: req.body.imageURL,
    });
    res.status(201).json({ data: newUser });
  } catch (error) {
    res.json(error);
  }
} );
app.get( "/user", async function ( req, res )
{
  const users = await User.find()
  res.status(200).json(users);
  
});

app.get("/", (req, res) => {
  const name = process.env.NAME || "Ashley";
  res.send(`Hello ${name}!`);
} );

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
