// Dependencies
const mongoose = require("mongoose");
const Park = require("./models/park");

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

const seedDB = async () => {
  // await Park.deleteMany({});
  await Park.insertMany([
    { title: "Place 1", location: "Loc 1" },
    { title: "Place 2", location: "Loc 2" },
    { title: "Place 3", location: "Loc 3" },
    { title: "Place 4", location: "Loc 4" },
    { title: "Place 5", location: "Loc 5" },
    { title: "Place 6", location: "Loc 6" },
    { title: "Place 7", location: "Loc 7" },
    { title: "Place 8", location: "Loc 8" },
    { title: "Place 9", location: "Loc 9" },
    { title: "Place 10", location: "Loc 10" },
  ]);
  console.log("Database updated");
};
seedDB().then(res => process.exit());
