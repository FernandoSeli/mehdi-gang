import * as React from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';
import styles from '../styles/Styles';
import { themeColor } from '../styles/Styles';

interface todaysWorkoutProps {
    item: any, //change it to object later on maybe.
    onPressLink: any,
}

const TodaysWorkout = (props: todaysWorkoutProps) => {

    const item = props.item
    const list = item.exercises
    //const exercises = []

    const onPressLink = props.onPressLink

    const exerciseListout = () => {
        let sentence = 'You are doing '
        list.map(e => {
            if (e.key === list.length - 1) {
                sentence = sentence + 'and ' + e.name + ' for today.'
                return
            }
            sentence = sentence + e.name + ', '
        })
        return sentence
    }
    const sentence = exerciseListout()

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
        <Text style={{ color: themeColor }}> {item.name}.</Text>
            </Text>
            <Text style={{ color: 'gray', textAlign: 'center', marginHorizontal: 20, marginVertical: 8 }}>
                {sentence}
            </Text>
            <TouchableOpacity onPress={() => onPressLink(item)}>
                <Text style={styles.linkedText}>
                    Go to workout
                </Text>
            </TouchableOpacity>
            {/* <Button title="log" onPress={() => { console.log(item) }} /> */}
            {/* <Button title="listout" onPress= { exerciseListout }/> */}
        </View>
    );
};

export default TodaysWorkout;
