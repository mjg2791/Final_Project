const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema({
  user: { type: String, required: true },
  item: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const List = mongoose.model("List", ListSchema);

module.exports = List;
