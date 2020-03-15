# FitnessTracker
 
## Project using MongoDB to track fitness workouts 

## User Story

* As a user, I want to be able to view create and track daily workouts. This app lets me log multiple exercises in a workout on a given day. I can also track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I can track the distance traveled and the duration of exercise.  Clicking on the "Fitness Tracker" text in the header takes me to a page where I can see a summary for the week of weights lifted, miles covered, and time spent in exercise.  

## Business Context

A consumer will reach their fitness goals quicker when they track their workout progress.

## Acceptance Criteria

When the user loads the page, they should be given the option to create a new workout, or continue with their last workout.  If they have no workouts saved, they must create a new workout to start.  

The user should be able to:

  * Add exercises to a previous workout plan.
  * Add new exercises to a new workout plan.
  * View multiple the combined weight of multiple exercises on the `stats` page.

## Implementation 

The front-end code was provided as part of the assignment.  The pages use the Semantic CSS framework and the data is stored in MongoDb and accessed using Mongoose.  