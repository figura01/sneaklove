const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tagsSchema = new Schema({
  label: String,
});

const Tags = mongoose.model("Tags", tagsSchema);
module.exports = Tags;
