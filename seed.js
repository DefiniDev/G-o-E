// Dependencies
const mongoose = require("mongoose");
const Park = require("./models/park");

// Connect to DB
async function main() {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/gardens-of-england")
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
    {
      title: "Place 1",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Un1.svg/1200px-Un1.svg.png",
      fees: "None",
      description: "The first place.",
      location: "Loc 1",
    },
    {
      title: "Place 2",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Deux.svg/1200px-Deux.svg.png",
      fees: "None",
      description: "The second place.",
      location: "Loc 2",
    },
    {
      title: "Place 3",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Trois.svg/1200px-Trois.svg.png",
      fees: "None",
      description: "The third place.",
      location: "Loc 3",
    },
    {
      title: "Place 4",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Quatre.svg/1200px-Quatre.svg.png",
      fees: "Parking",
      description: "The fourth place.",
      location: "Loc 4",
    },
    {
      title: "Place 5",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/5.svg/1200px-5.svg.png",
      fees: "Parking",
      description: "The fifth place.",
      location: "Loc 5",
    },
    {
      title: "Place 6",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Six.svg/1200px-Six.svg.png",
      fees: "Parking",
      description: "The sixth place.",
      location: "Loc 6",
    },
  ]);
  console.log("Database updated");
};
seedDB().then(res => process.exit());

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
