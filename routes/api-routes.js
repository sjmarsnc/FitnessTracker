// Requiring our models and passport as we've configured it
// var db = require("../models");
// const mongojs = require("mongojs");
// const databaseUrl = "workout";
// const collections = ["workouts"];
// const db = mongojs(databaseUrl, collections);
const db = require("../models");
// var passport = require("../config/passport");

// Requiring our custom middleware for checking if a user is logged in
// const isAuthenticated = require("../config/middleware/isAuthenticated");

// const mongoose = require("mongoose");

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts",
// {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true
// });


module.exports = function (app) {
    // Using the passport.authenticate middleware with our local strategy.
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the user will be sent an error
    // app.post("/api/login", passport.authenticate("local"), function (req, res) {
    //   res.json(req.user);
    // });

    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
    // otherwise send back an error
    // app.post("/api/signup", function (req, res) {
    //   db.User.create({
    //     email: req.body.email,
    //     password: req.body.password
    //   })
    //     .then(function () {
    //       res.redirect(307, "/api/login");
    //     })
    //     .catch(function (err) {
    //       res.status(401).json(err);
    //     });
    // });

    // // Route for logging user out
    // app.get("/logout", function (req, res) {
    //   req.logout();
    //   res.redirect("/");
    // });



    // get the latest workout     later:  by user 
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then((found) => {
            console.log("GET /api/workouts:", found);
            res.json(found);

        });
    }); 

  app.get("/api/workouts/range", (req, res) => {
        console.log("In /api/workout/range: ");
        db.Workout.find({}).then(found => {
            res.json(found);
        })
    });

    // create a new workout 
    app.post("/api/workouts", (req, res) => {
        let newWorkout = req.body;
        db.Workout.create(newWorkout)
            .then(data => res.json(data));
    });

    //Route for getting some data in the search bar
    app.put("/api/workouts/:id", function (req, res) {

    });

    app.post("/api/workouts/:id", function (req, res) {

    });

} 