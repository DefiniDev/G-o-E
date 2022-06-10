// Dependencies
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Park = require("./models/park");
const { urlencoded } = require("express");
const methodOverride = require("method-override");

// Connect to DB
async function main() {
  await mongoose
    .connect("mongodb://localhost:27017/gardens-of-england")
    .then(() => {
      console.log("Database connected");
    });
}
main().catch(err => {
  console.log("ERROR!");
  console.log(err);
});

// Middleware
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Route - show all products
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
  const park = new Park(req.body.park);
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

/*
// Async / await fetch api demo
//const res = await fetch("https://swapi.dev/api/people/1/");
const getDadJoke = async () => {
  const res = await fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  });
  const data = await res.json();
  console.log(data.joke);
};
getDadJoke();

// Function - create query string from object
const demoQS = { p: "tree", color: "brown" };
function toQueryString(paramsObject) {
  return Object.keys(paramsObject)
    .map(
      key =>
        `${encodeURIComponent(key)}=${encodeURIComponent(paramsObject[key])}`
    )
    .join("&");
}
console.log(toQueryString(demoQS));
*/

/*
// Make park db demo
app.get("/makepark", async (req, res) => {
  const park = new Park({ title: "My Backyard", description: "Cheap walking" });
  await park.save();
  res.send(park);
});
*/
