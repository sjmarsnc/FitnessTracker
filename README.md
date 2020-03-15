# FitnessTracker
 
## Project using MongoDB to track fitness workouts 

## User Story

As a user, I want to be able to view create and track daily workouts. This app lets me: 

* log multiple exercises in a workout on a given day
* track the name, type, weight, sets, reps, and duration of of a strength/resistance exercise 
* track the distance and time duration of a cardio exercise
* click on the "Fitness Tracker" text in the header to see a summary for the week of weights lifted, miles covered, and time spent in exercise.  

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