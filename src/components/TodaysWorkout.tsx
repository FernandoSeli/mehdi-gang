import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/Styles';
import { themeColor } from '../styles/Styles';

interface todaysWorkoutProps { 
    name: string,
}

const TodaysWorkout = (props: todaysWorkoutProps) => {

    const name = props.name
    //const exercises = []

    return (
        <View style={{
            backgroundColor: 'black',
            minHeight: 280,
            alignContent: 'center',
            justifyContent: 'center',
        }}>
            <Text style={{
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold', fontSize: 28,
                paddingHorizontal: 18,
            }}>Hi Kale. Today's workout is
        <Text style={{ color: themeColor }}> {name}.</Text>
            </Text>
            <Text style={{ color: 'gray', textAlign: 'center', marginHorizontal: 20, marginVertical: 8 }}>
                You are doing Barbell Bench Press, Overhead Press, Tricep Dips, Machine Shoulder Press, Incline Dumbell Curls, and Rope Pushdowns today.
        </Text>
            <TouchableOpacity>
                <Text style={styles.linkedText}>
                    Go to workout
            </Text>
            </TouchableOpacity>
        </View>
    );
};

export default TodaysWorkout;
