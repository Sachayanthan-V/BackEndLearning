const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const port = 8000;
const expresslayouts = require("express-ejs-layouts");
const db = require("./config/mongoose");
const User = require("./models/user");
const routes = require("./routes");

app.use(express.urlencoded());

app.use( cookieParser() ); 
app.use(express.static("./assets"));
 
app.use(expresslayouts);
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

app.use("/", routes);

// app.set('layout ')

app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, function (error) {
  if (error) {
    console.log(`Error while listening to port :: ${port}`);
    return;
  }
  console.log(`Listening on port ${port}`);
});
