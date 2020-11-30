import { TouchableOpacity, View, Text, FlatList, StatusBar, ScrollView, Dimensions } from 'react-native';
import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance';
import React, { Component, useState } from 'react';
//Component Imports
import TestFirebase from '../components/test/TestFirebase';
import NewWorkoutBtn from '../components/buttons/NewWorkoutBtn';
import ExerciseCard from '../components/ExerciseCard';
import TodaysWorkout from '../components/TodaysWorkout'
//Stlye Imports
import styles, { themeColor } from '../styles/Styles';
import { LinearGradient } from 'expo-linear-gradient'

type Props = {
    nav: any,
}

const list = [ //This will later be your Routine data from the Database.
    {
        key: 0, day: 1, name: "Power Push Day",
        exercises: [{
            "key": 0,
            "name": "Bench Press",
            "reps": "4",
            "sets": "5",
        }, {
            "key": 1,
            "name": "Overhead Press",
            "reps": "5",
            "sets": "5",
        }, {
            "key": 2,
            "name": "Tricep Dips",
            "reps": "10",
            "sets": "4",
        }, {
            "key": 3,
            "name": "Cable Crossovers",
            "reps": "12",
            "sets": "3",
        }]
    },
    {
        key: 1, day: 2, name: "Power Pull Day",
        exercises: [{
            "key": 0,
            "name": "Barbell Rows",
            "reps": "4",
            "sets": "5",
        }, {
            "key": 1,
            "name": "Neutral Grip Pulldowns",
            "reps": "5",
            "sets": "5",
        }, {
            "key": 2,
            "name": "EZ Bar Curls",
            "reps": "10",
            "sets": "4",
        }, {
            "key": 3,
            "name": "Preacher Curls",
            "reps": "12",
            "sets": "3",
        }]
    },
    {
        key: 2, day: 3, name: "Power Leg Day",
        exercises: [{
            "key": 0,
            "name": "Bench Press",
            "reps": "4",
            "sets": "5",
        }, {
            "key": 1,
            "name": "Overhead Press",
            "reps": "5",
            "sets": "5",
        }, {
            "key": 2,
            "name": "Tricep Dips",
            "reps": "10",
            "sets": "4",
        }, {
            "key": 3,
            "name": "Cable Crossovers",
            "reps": "12",
            "sets": "3",
        }]
    },
    {
        key: 3, day: 4, name: "Hypertrophy Push Day",
        exercises: [{
            "key": 0,
            "name": "Bench Press",
            "reps": "4",
            "sets": "5",
        }, {
            "key": 1,
            "name": "Overhead Press",
            "reps": "5",
            "sets": "5",
        }, {
            "key": 2,
            "name": "Tricep Dips",
            "reps": "10",
            "sets": "4",
        }, {
            "key": 3,
            "name": "Cable Crossovers",
            "reps": "12",
            "sets": "3",
        }]
    },
    {
        key: 4, day: 5, name: "Hypertrophy Pull Day",
        exercises: [{
            "key": 0,
            "name": "Bench Press",
            "reps": "4",
            "sets": "5",
        }, {
            "key": 1,
            "name": "Overhead Press",
            "reps": "5",
            "sets": "5",
        }, {
            "key": 2,
            "name": "Tricep Dips",
            "reps": "10",
            "sets": "4",
        }, {
            "key": 3,
            "name": "Cable Crossovers",
            "reps": "12",
            "sets": "3",
        }]
    },
    {
        key: 5, day: 6, name: "Hypertrophy Legs and Core Day",
        exercises: [{
            "key": 0,
            "name": "Bench Press",
            "reps": "4",
            "sets": "5",
        }, {
            "key": 1,
            "name": "Overhead Press",
            "reps": "5",
            "sets": "5",
        }, {
            "key": 2,
            "name": "Tricep Dips",
            "reps": "10",
            "sets": "4",
        }, {
            "key": 3,
            "name": "Cable Crossovers",
            "reps": "12",
            "sets": "3",
        }]
    },
]

// class HomeScreen extends Component<Props> { //DEPRECATED

//     state = {
//         today: null,
//     }

//     componentDidMount() {
//         var date = new Date();
//         var day = date.getDay()
//         this.setState({
//             // today: day,
//             today: 4,
//         })
//     }

//     renderItem = ({ item }) => {
//         let isToday: boolean
//         if (item.day === this.state.today) { isToday = true } else { isToday = false }
//         return (
//             <ExerciseCard day={item.day} name={item.name} isSelected={isToday} onPress={() => this.goToWorkout(item)} />
//         );
//     }

//     goToWorkout = (exercise: any) => {
//         this.props.nav.navigate("Workout", { name: exercise.name });
//     }

//     render() {
//         return (
//             // <SafeAreaView style={{flex: 1,}}>
//             <View style={styles.defaultLight}>
//                 {/* <NewWorkoutBtn title="Create a new workout day" nav={this.props.nav} /> */}
//                 <FlatList
//                     data={list}
//                     renderItem={this.renderItem}
//                     keyExtractor={item => { return item.key.toString() }}
//                     extraData={list}
//                 />
//             </View>
//             // </SafeAreaView>
//         );
//     }
// }

function Home({ navigation }) {

    var date = new Date();
    const { width } = Dimensions.get('window');
    const { height } = Dimensions.get('screen')
    const [today, setDay] = useState(date.getDay());
    const [exerciseList, exerciseListEdit] = useState(list);
    const findWorkout = (day) => {
        return list.find((workout) => workout.day === today)
    }
    const todaysWorkout = findWorkout(today)

    const renderItem = ({ item }) => {
        let isToday: boolean
        if (item.day === today) { isToday = true } else { isToday = false }
        return (
            <ExerciseCard day={item.day} name={item.name} isSelected={isToday} onPress={() => goToWorkout(item)} key={item.key} />
        );
    };

    const goToWorkout = (exercise: any) => {
        navigation.navigate("Workout", { name: exercise.name });
    }


    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>

            <StatusBar barStyle='light-content' />

            <TodaysWorkout item={todaysWorkout} onPressLink={goToWorkout}/>
            {/* props should later be the whole exercise */}

            <Text style={[styles.h1, { color: 'white', fontSize: 24, marginHorizontal: 16, marginBottom: 8 }]}>
                Full workout:
            </Text>

            <View>
                {
                    exerciseList.map((item) => renderItem({ item }))
                }
            </View>
            {/* <HomeScreen nav={navigation} /> */}
        </ScrollView>
    )
};

export default Home;

// ================================= To-Do =================================
// Go to workout based on the workout selected. Right now, the place holder is a "New Workout" 
// Selected/Today's workout will be the one on the TodaysWorkout component. Pass it in as a prop.
//
//
// ================================= Styling To-Do =================================
// Fade out the top and bottom of the ScrollView. rn-faded-scrollview
// Dynamic dark/light mode. Idk how to use hooks.
//
//