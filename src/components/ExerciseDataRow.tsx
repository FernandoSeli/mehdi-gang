import { Text, View, TouchableWithoutFeedback, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { lightBackground } from '../styles/Styles'
import styles from '../styles/Styles'

const exerciseRow = ({ item }) => {

    const plus = ' + '
    let [render, updateRender] = React.useState(null)
    let [selected, select] = React.useState(false)

    const viewData = 'View Logs >>'
    const newEntry = 'Add New Entry >>'
    const lastWeight = 90 //Adjust for lbs and kgs later on. You will probably use Redux to set the unit state here.
    const onerm = 120
    const repstring = '8, 8, 7, 4' //Need a function to adaptively concatinate reps and sets.

    const preRender =
        <View style={{
            minHeight: 50,
            marginVertical: 6,
            paddingHorizontal: 12,
            // backgroundColor: 'red'
        }}>
            <View style={{ alignItems: 'flex-start' }}>
                <Text style={styles.text}>
                    One Rep Max: {onerm} lbs
            </Text>
                <Text style={styles.text}>
                    Last Workout: {lastWeight}lbs for {repstring} reps
            </Text>
            </View>
            <View style={{ alignItems: 'flex-end', marginTop: 12 }}>
                <TouchableOpacity>
                    <Text style={[styles.linkedText, { margin: 0 }]}>
                        {viewData}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={[styles.linkedText, { margin: 0 }]}>
                        {newEntry}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

    const onPress = () => {
        if (!selected) {
            updateRender(
                render = preRender
            )
            select(selected = !selected)
        }
        else {
            updateRender(
                render = null
            )
            select(selected = !selected)
        }
    }

    return (
        <TouchableWithoutFeedback key={item.key} onPress={onPress}>
            <View style={{
                backgroundColor: lightBackground,
                borderRadius: 2,
                minHeight: 40,
                marginVertical: 4,
                marginHorizontal: 12,
                paddingHorizontal: 16,
                padding: 6,
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={[styles.title2, localStyle.marginHorizontal]}>
                        {item.name}
                    </Text>
                    <Text style={[styles.title2, localStyle.marginHorizontal, localStyle.lightText]}>
                        {item.sets} sets of
                    </Text>
                    <Text style={[styles.title2, localStyle.marginHorizontal, localStyle.lightText]}>
                        {item.reps} reps
                    </Text>
                </View>
                {render}
            </View>
        </TouchableWithoutFeedback>
    )
}
export default exerciseRow;

const localStyle = StyleSheet.create({
    marginHorizontal: {
        marginHorizontal: 4
    },
    bold: {
        fontWeight: 'bold'
    },
    lightText: {
        color: 'gray'
    }
})

// ================================== To-Do ==================================
// Dropdown animation!

// Workout Card Sketch:
// ------------------------------
// Barbell Rows 5 sets of 4 Reps
// 1 Rep Max: 67.5
// Last Workout:
//         50      4, 4, 4, 4, 3
//                  View Logs >>
//                  New Entry >>
// -----------------------------