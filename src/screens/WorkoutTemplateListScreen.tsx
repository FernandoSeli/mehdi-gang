import React, { Component, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/Styles'
import exerciseListJson from '../database/ExerciseList'
import WorkoutCard from '../components/WorkoutCard'
import WorkoutTemplateCard from '../components/WorkoutTemplateCard'

export interface Props {

}

//At the moment, this screen extracts data from the WorkoutTemplate list. Change it later to WorkoutRecord list.
export default function WorkoutTemplateList({ navigation }) {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => newWorkoutTemplate()}>
                    <Text style={styles.headerButton}>
                        New
                    </Text>
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    const newWorkoutTemplate = () => {
        navigation.navigate("NewTemplate")
    }

    const list = exerciseListJson
    // <ExerciseCard day={item.day} name={item.name} isSelected={isToday} onPress={() => goToWorkout(item)} key={item.key} />

    const goToWorkout = (item: any) => {
        const exerciseList = item.exercises
        navigation.navigate("Details", { key: item.key, item: exerciseList });
        // console.log(exerciseList);
    }

    const renderItem = ({ item }) => {
        return (
            // <ExerciseCard day={item.day} name={item.name} onPress={() => goToWorkout(item)} key={item.key} />
            <WorkoutTemplateCard item={item} key={item.key} onPress={() => goToWorkout(item)} />
        );
    }

    if (!list) {
        return (
            <View style={styles.whiteContainer}>
                <Text style={styles.white}>No available workout templates.</Text>
            </View>
        )
    }
    else {
        return (
            <View style={styles.whiteContainer}>
                <ScrollView>
                    {
                        list.map(item => renderItem({ item }))
                    }
                </ScrollView>
            </View>
        );
    }
}
