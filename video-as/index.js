const express = require( "express" );
const mongoose = require( "mongoose" );
const Video = require( "./videoModel" );

const app = express();
app.use( express.json() );
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
app.post("/api/video", async function (req, res) {
  console.log(req.body);
  try {
    const newVideo = await Video.create({
     videoURL: req.body.videoURL,
    });
    res.status(201).json({ data: newVideo });
  } catch (error) {
    res.json(error);
  }
});

app.get( "/video", async function ( req, res )
{
  const videos = await Video.find()
  res.send(`video on asia southest 1\n`+videos);
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`video-as: listening on port ${port}`);
});
