const express = require("express");
const mongoose = require("mongoose");
const shortid = require("shortid");

const app = express();
mongoose.connect(
  "mongodb+srv://neeraj:GkBMYIB0F1JgvJdA@urlshortener.kyacjm7.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const UrlSchema = new mongoose.Schema({
  originalUrl: String,
  shortUrl: String,
});

const Url = mongoose.model("Url", UrlSchema);
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/shorten", async (req, res) => {
  const { originalUrl, customShortId } = req.body;
  const shortUrl = customShortId || shortid.generate();
  const existingUrl = await Url.findOne({ shortUrl });

  if (existingUrl) {  
    res.status(400).send("Custom short ID is already in use");
  } else {
    const url = new Url({ originalUrl, shortUrl });
    await url.save();
    res.render("shorten", { shortUrl });
  }
});

app.get("/s/:shortUrl", async (req, res) => {
  const { shortUrl } = req.params;

  const url = await Url.findOne({ shortUrl });

  if (url) {
    res.redirect(url.originalUrl);
  } else {
    res.status(404).send("URL not found");
  }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
