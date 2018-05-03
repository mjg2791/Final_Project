const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/grocerylist",
  {
    useMongoClient: true
  }
);


const listSeed = [
  {
    user: "Maria",
    item: "Potato",
    date: new Date(Date.now())
  },
  {
    user: "Timmy",
    item: "Toilet Paper",
   	date: new Date(Date.now())
  }
];


db.List
  .remove({})
  .then(() => db.List.collection.insertMany(listSeed))
  .then(data => {
    console.log(data.insertedIds.length + " item added");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
