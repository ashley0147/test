const express = require( "express" );
const mongoose = require("mongoose");
const User = require("./userModel")
const app = express();
 const uri =
  "mongodb+srv://nguyenhao194554:test1234@cluster0.571vhmh.mongodb.net/?retryWrites=true&w=majority";
async function connect()
{
  try {
    await mongoose.connect( uri );
    console.log("Connected to db")
  } catch ( error ) {
    console.error(error)
  }
  
}
connect()
app.post( "/api/user", async function ( req, res )
{
  try {
    const newUser = await User.create({
      name: req.body.name,
      imageURL: req.body.imageURL,
    });
    res.status( 201 ).json( { data: newUser } );
  } catch ( error ) {  res.json( error ) }
});
app.get("/", (req, res) => {
  const name = process.env.NAME || "Ashley";
  res.send(`Hello ${name}!`);
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
