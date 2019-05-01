const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const helloSchema = new Schema({
    message: String
});

const Hello = mongoose.model("Hello", helloSchema);
module.exports = Hello;