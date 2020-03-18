
const db = require("../models");
// var passport = require("../config/passport");
// Requiring our custom middleware for checking if a user is logged in
// const isAuthenticated = require("../config/middleware/isAuthenticated");


module.exports = function (app) {

    // get the latest workout     later:  by user 
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then((found) => {
            res.json(found);
        });
    }); 

  app.get("/api/workouts/range", (req, res) => {
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

    // add an exercise to a workout 
    app.put("/api/workouts/:id", function (req, res) {
        console.log("Incoming data to add a workout: ", req.body); 
        console.log("Id: ",req.params.id); 
        // let newExercise = JSON.parse(req.body);
        let newExercise = req.body; 
        db.Workout.findByIdAndUpdate( req.params.id , { $push: {exercises: newExercise}})
          .then(updatedWorkout => { console.log(updatedWorkout)});  
    });

    app.post("/api/workouts/:id", function (req, res) {

    });

} 