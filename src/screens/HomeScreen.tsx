import { TouchableOpacity, View, Text, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance';
import React, { Component } from 'react';
import styles from '../styles/Styles';
//Component Imports
import TestFirebase from '../components/test/TestFirebase';
import NewWorkoutBtn from '../components/buttons/NewWorkoutBtn';
import ExerciseCard from '../components/ExerciseCard'
//Temporary Imports

type Props = {
    nav: any,
}

const list = [ //This will later be your Routine data from the Database.
    { key: 0, day: 1, name: "Power Push Day" },
    { key: 1, day: 2, name: "Power Pull Day" },
    { key: 2, day: 3, name: "Power Leg Day" },
    { key: 3, day: 3, name: "Hypertrophy Push Day" },
    { key: 4, day: 3, name: "Hypertrophy Pull Day" },
    { key: 5, day: 3, name: "Hypertrophy Legs and Core Day" },
]

class HomeScreen extends Component<Props> {

    state = {
        today: null,
    }

    componentDidMount() {
        var date = new Date();
        var day = date.getDay()
        this.setState({
            today: day,
        })
    }

    renderItem = ({ item }) => {
        let isToday: boolean
        if (item.day === this.state.today) { isToday = true } else { isToday = false }
        return (
            <ExerciseCard day={item.day} name={item.name} isSelected={isToday} onPress={() => this.goToWorkout(item)} />
        );
    }

    goToWorkout = (exerciseData: any) => {
        this.props.nav.navigate("Workout", { name: exerciseData.name });
    }

    render() {
        return (
            <View style={styles.defaultLight}>
                {/* <NewWorkoutBtn title="Create a new workout day" nav={this.props.nav} /> */}
                <FlatList
                    data={list}
                    renderItem={this.renderItem}
                    keyExtractor={item => { return item.key.toString() }}
                    extraData={list}
                />
                <StatusBar style="dark" />
            </View>
        );
    }
}

export default HomeScreen;

// ================================= To-Do =================================
// Dynamic dark/light mode. Idk how to use hooks.
// Maybe sort the day so today's workout be on the top?
// Go to workout based on the workout selected. Right now, the place holder is a "New Workout" 
//
//