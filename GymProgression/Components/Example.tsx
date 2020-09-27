import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { DatabaseConnection } from "../Database/DatabaseConnection";
import { Template } from "../Models/Template";
import { Workout } from "../Models/Workout";
import { getRepository } from "typeorm/browser";

import "reflect-metadata";

export default class Example extends React.Component {
  Test = async () => {
    await DatabaseConnection.Connect();
    // const template = new Template();
    // template.name = "testTemplate";
    // const workout = new Workout();
    // workout.name = "Bench press";
    // workout.lowRepRange = 5;
    // workout.highRepRange = 10;
    // workout.sets = 3;
    // workout.restInSeconds = 10;
    // workout.weightIncrement = 1;
    // workout.currentLift = 65;
    // workout.currentOneRepMax = 75;
    // workout.template = template;
    // console.log(workout);
    // const workoutRepository = getRepository(Workout);
    // await workoutRepository.save(workout);
    // const loadedWorkout = await workoutRepository.findOne({
    //   where: { id: workout.id },
    //   relations: ["template"],
    // });
    // // createQueryBuilder('workout')
    // // .innerJoinAndSelect("workout.template", "template")
    // // .where('template.id = :id', { id: template.id })
    // // .getOne();
    // console.log(loadedWorkout);
  };
  render() {
    return (
      <View>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />

        <Button
          onPress={this.Test}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
