// Dependencies
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const { urlencoded } = require("express");
const methodOverride = require("method-override");
const Park = require("./models/park");

// Connect to DB
async function main() {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/gardens-of-england")
    .then(() => {
      console.log("Database connected");
    });
}
main().catch((err) => {
  console.log("ERROR!");
  console.log(err);
});

// Middleware
app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
// app.use((req, res, next) => {});

// Routes
app.get("/", async (req, res) => {
  res.render("home");
});

app.get("/parks", async (req, res) => {
  const parks = await Park.find();
  res.render("parks/index", { parks });
});

app.get("/parks/new", (req, res) => {
  res.render("parks/new");
});

app.post("/parks", async (req, res) => {
  const prePark = req.body.park;
  if (prePark.image === "") prePark.image = "/img/no-image.png";
  const park = new Park(prePark);
  await park.save();
  res.redirect(`/parks/${park._id}`);
});

app.get("/parks/:id", async (req, res) => {
  const park = await Park.findById(req.params.id);
  res.render("parks/show", { park });
});

app.get("/parks/:id/edit", async (req, res) => {
  const park = await Park.findById(req.params.id);
  res.render("parks/edit", { park });
});

app.put("/parks/:id", async (req, res) => {
  const { id } = req.params;
  const park = await Park.findByIdAndUpdate(id, { ...req.body.park });
  res.redirect(`/parks/${park._id}`);
});

app.delete("/parks/:id", async (req, res) => {
  const { id } = req.params;
  await Park.findByIdAndDelete(id);
  res.redirect("/parks");
});

// Start server
app.listen(3000, () => {
  console.log("APP IS LISTENING ON PORT 3000!");
});
