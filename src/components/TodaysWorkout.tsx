import * as React from 'react';
import { Text, View, TouchableOpacity, Button, StyleSheet } from 'react-native';
import styles from '../styles/Styles';
import { themeColor } from '../styles/Styles';

interface todaysWorkoutProps {
    item: any, //change it to object later on maybe.
    onPressLink: any,
}

const TodaysWorkout = (props: todaysWorkoutProps) => {

    let render = null
    const item = props.item
    const userName = 'Kale' //Placeholder name/

    if (!item) {
        render =
            <View>
                <Text style={localStyles.hiText}>
                    Hi {userName}. You can rest for today.
                </Text>
                <Text style={localStyles.grayText}> 
                    You have no workout for today. 
                </Text>
            </View>
    }
    else {
        const list = item.exercises

        //const exercises = []

        const onPressLink = props.onPressLink

        const exerciseListout = () => {
            let sentence = 'You are doing '
            list.map((e: { key: number; name: string; }) => {
                if (e.key === list.length - 1) {
                    sentence = sentence + 'and ' + e.name + ' for today.'
                    return
                }
                sentence = sentence + e.name + ', '
            })
            return sentence
        }
        const sentence = exerciseListout()
        render =
            <View>
                <Text style={localStyles.hiText}>Hi {userName}. Your next workout is
        <Text style={{ color: themeColor }}> {item.name}.</Text>
                </Text>
                <Text style={localStyles.grayText}>
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
    }

    return (
        <View style={{
            // backgroundColor: 'black',
            minHeight: 260,
            alignContent: 'center',
            justifyContent: 'center',
        }}>
            {render}
        </View>
    );
};

export default TodaysWorkout;

const localStyles = StyleSheet.create({
    hiText: {
        color: 'black',
        textAlign: 'center', 
        fontSize: 26,
        paddingHorizontal: 16,
        fontFamily: 'OpenSans-bold',
        letterSpacing: -2,
    },
    grayText: {
        color: 'gray',
        textAlign: 'center',
        marginHorizontal: 20,
        marginVertical: 8
    }
})
