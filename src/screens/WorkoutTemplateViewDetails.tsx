import React, { Component, useState } from 'react';
import { View, Text, Button, ScrollView, TouchableOpacity } from 'react-native';
//Components
import exerciseRow from '../components/ExerciseDataRow';
import { WorkoutTemplate } from '../models/WorkoutTemplate';
//Database
// import * as data from '../database/ExerciseList';
//Style
import styles from '../styles/Styles';
import buttonColor from '../styles/Styles'

export interface Props {
    item: any,
    key: string,
}

function WorkoutTemplateViewDetails({ navigation, route }) {

    // const list = data.default.find(d => d.day === 1).exercises
    const list = route.params.item
    // console.log(list);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => goToWorkout('14')}>
                    <Text style={styles.headerButton}>
                        Edit
                    </Text>
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    const goToWorkout = (key:string) => {

        console.log("Go to WorkoutTemplateScreen.tsx")
        //Work in progress. Continue after implementing async function on the WorkoutScreen.

        // let name: string, exercises: any;
        // if (item) {
        //     name = item.name
        //     exercises = item.exercises
        // }
        // else {
        //     name = '',
        //         exercises = null
        // }
        // navigation.navigate("Workout", { name: name, item: exercises }); //Ask Nando if you should prop the whole data.
    }

    let sentence: string = '';

    const debugButton = () => {
        console.log(list.find(c => {
            if (c.key === 0) {
                return true
            } else { return false }
        }));
    }

    return (
        <View style={[styles.whiteContainer, { justifyContent: 'flex-start', paddingTop: 14 }]}>
            <ScrollView>
                {
                    list.map(item => exerciseRow({ item }))
                }
            </ScrollView>
            {/* <Button title="test" onPress={debugButton} /> */}
        </View>
    );
}

export default WorkoutTemplateViewDetails;
// ========================================== To-Do ==========================================
//  
//
//
//
//