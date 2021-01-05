import React, { Component, useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
//Components
import exerciseRow from '../components/ExerciseRow';
//Database
// import * as data from '../database/ExerciseList';
//Style
import styles from '../styles/Styles';

export interface Props {
    item:any,
    key:string,
}

function WorkoutDetails({navigation, route}) {

    // const list = data.default.find(d => d.day === 1).exercises
    const list = route.params.item
    // console.log(list);

    let sentence: string = '';

    const debugButton = () => {
        console.log(list.find(c => {
            if (c.key === 0) {
                return true
            } else { return false }
        }));
    }

    return (
        <View style={[styles.darkContainer, { justifyContent: 'flex-start', paddingTop: 14 }]}>
            <ScrollView>
                {
                    list.map(item => exerciseRow({ item }))
                }
            </ScrollView>
            {/* <Button title="test" onPress={debugButton} /> */}
        </View>
    );
}

export default WorkoutDetails;

// ========================================== To-Do ==========================================
//  
//
//
//
//