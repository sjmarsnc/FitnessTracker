const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// // If want to add sessions later to keep track of our user's login status
// app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

// Requiring our routes
// require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app); 

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout",
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});


app.listen(3000, () => {
  console.log("App running on port 3000!");
});



