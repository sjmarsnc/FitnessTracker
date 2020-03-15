const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Type of exercise is required",
                validate: { 
                    validator: function( exercise) 
                    {
                     return ["Resistance", "Cardio"].indexOf(value) > -1; 
                    }, 
                    message: "Exercise type not valid."
               }
            },

            name: {
                type: String,
                trim: true,
                required: true, 
                message: "Type of exercise is required"
            },

            weight: {
                type: Number
            },

            reps: {
                type: Number
            },

            sets: {
                type: Number
            },

            distance: {
                type: Number
            },

            time: {
                type: Number
            }
        }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
