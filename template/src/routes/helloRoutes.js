module.exports = {
    build: vars => `const express = require("express");
const controllers = require("../controllers");

const router = express.Router();

module.exports = router
    .get("/", controllers.hello.index)`
}