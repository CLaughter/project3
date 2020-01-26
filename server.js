const express = require("express");
const mongoose = require("mongoose");

const routes = require("./server/routes")
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gifting", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
