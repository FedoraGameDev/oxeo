module.exports = {
    build: vars =>
        `const express = require("express");
const db = require("./src/database"); //Required to initialize connection to DB
const routes = require("./src/routes");
const cors = require("cors");
const bodyparser = require("body-parser");

///////////////
/* Setup app */
///////////////
const app = express();
app.use(cors({ origin: (origin, callback) => { return callback(null, true); } })); //Allow any domain through cors
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());

//////////////////////////
/* Apply website routes */
//////////////////////////
app.use("/api/hello", routes.hello);

//////////////////////////////////
/* Use frontend when it's built */
//////////////////////////////////
// app.use(express.static(path.join(__dirname, 'frontend/build')));
// app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'frontend/build', 'index.html')));

///////////////////////
/* Serve application */
///////////////////////
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(\`Listening on port \${ port}...\`));`
}