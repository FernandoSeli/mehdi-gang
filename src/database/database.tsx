import React from 'react'
import { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { createConnection, getRepository } from 'typeorm/browser';
import { Workout } from '../models/Workout';
import { WorkoutTemplate } from '../models/WorkoutTemplate';


interface IDatabaseProps {

}

export default class Database extends Component<IDatabaseProps> {
  

  static connect() {
    return createConnection({
      database: "test",
      driver: require('expo-sqlite'),
      entities: [
          Workout,
          WorkoutTemplate,
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
    const loadedWorkout = await workoutRepository.findOne({where: {id: workout.id}});
    const loadedWorkoutTemplate = await workoutTemplateRepository.findOne(workoutTemplate.id);

    if (loadedWorkout) {
      console.log("Post has been loaded: ", loadedWorkout);
      console.log(JSON.stringify(loadedWorkout));
      console.log(JSON.stringify(loadedWorkoutTemplate));
    }
  }
}