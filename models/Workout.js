const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: true, 
                message: "Type of exercise is required"
               
            },

            name: {
                type: String,
                trim: true,
                required: true, 
                message: "Name of exercise is required"
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

            duration: {
                type: Number
            }
        }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
