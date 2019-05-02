module.exports = {
    build: vars => `const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HelloSchema = new Schema({
    message: String
});

const Hello = mongoose.model("Hello", HelloSchema);
module.exports = Hello;`
}