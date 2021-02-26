import React from 'react'
import { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { createConnection, getRepository } from 'typeorm/browser';

import { Exercise } from '../models/Exercise';
import { ExerciseCategory } from '../models/ExerciseCategory';
import { Routine } from '../models/Routine';
import { WorkoutLog } from '../models/WorkoutLog';
import { WorkoutLogExercise } from '../models/WorkoutLogExercise';
import { WorkoutLogExerciseDropSet } from '../models/WorkoutLogExerciseDropSet';
import { WorkoutLogExerciseSet } from '../models/WorkoutLogExerciseSet';
import { WorkoutLogMultiExercise } from '../models/WorkoutLogMultiExercise';
import { WorkoutTemplate } from '../models/WorkoutTemplate';
import { WorkoutTemplateExercise } from '../models/WorkoutTemplateExercise';
import { WorkoutTemplateExerciseDropSet } from '../models/WorkoutTemplateExerciseDropSet';
import { WorkoutTemplateExerciseSet } from '../models/WorkoutTemplateExerciseSet';
import { WorkoutTemplateMultiExercise } from '../models/WorkoutTemplateMultiExercise';


interface IDatabaseProps {

}

export default class Database extends Component<IDatabaseProps> {


  static connect() {
    return createConnection({
      database: "test",
      driver: require('expo-sqlite'),
      entities: [
        Exercise,
        ExerciseCategory,
        Routine,
        WorkoutLog,
        WorkoutLogExercise,
        WorkoutLogExerciseDropSet,
        WorkoutLogExerciseSet,
        WorkoutLogMultiExercise,
        WorkoutTemplate,
        WorkoutTemplateExercise,
        WorkoutTemplateExerciseDropSet,
        WorkoutTemplateExerciseSet,
        WorkoutTemplateMultiExercise,
      ],
      synchronize: true,
      type: "expo",
    });
  }

  static async runDemo() {
    await this.connect();

    // initialise object variable
    const workout = new Workout();
    workout.name = "bench full";

    const workoutTemplate = new WorkoutTemplate();
    workoutTemplate.name = "volume";

    //access database
    //get repository
    const workoutRepository = getRepository(Workout);
    const workoutTemplateRepository = getRepository(WorkoutTemplate);
    //save
    await workoutTemplateRepository.save(workoutTemplate);
    await workoutRepository.save(workout);

    console.log("Post has been saved");

    //load
    const loadedWorkout = await workoutRepository.findOne({ where: { id: workout.id } });
    const loadedWorkoutTemplate = await workoutTemplateRepository.findOne(workoutTemplate.id);

    if (loadedWorkout) {
      console.log("Post has been loaded: ", loadedWorkout);
      console.log(JSON.stringify(loadedWorkout));
      console.log(JSON.stringify(loadedWorkoutTemplate));
    }
  }
}