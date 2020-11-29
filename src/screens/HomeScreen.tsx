import { TouchableOpacity, View, Text, FlatList, StatusBar, ScrollView } from 'react-native';
import { Appearance, AppearanceProvider, useColorScheme } from 'react-native-appearance';
import React, { Component, useState } from 'react';
//Component Imports
import TestFirebase from '../components/test/TestFirebase';
import NewWorkoutBtn from '../components/buttons/NewWorkoutBtn';
import ExerciseCard from '../components/ExerciseCard';
import TodaysWorkout from '../components/TodaysWorkout'
//Stlye Imports
import styles, { themeColor } from '../styles/Styles';
import darkBackground from '../styles/Styles'
import { withSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
    nav: any,
}

const list = [ //This will later be your Routine data from the Database.
    { key: 0, day: 1, name: "Power Push Day" },
    { key: 1, day: 2, name: "Power Pull Day" },
    { key: 2, day: 3, name: "Power Leg Day" },
    { key: 3, day: 4, name: "Hypertrophy Push Day" },
    { key: 4, day: 5, name: "Hypertrophy Pull Day" },
    { key: 5, day: 6, name: "Hypertrophy Legs and Core Day" },
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

//     goToWorkout = (exerciseData: any) => {
//         this.props.nav.navigate("Workout", { name: exerciseData.name });
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

    const [today, setDay] = useState(date.getDay());
    const [exerciseList, exerciseListEdit] = useState(list);

    const renderItem = ({ item }) => {
        let isToday: boolean
        if (item.day === today) { isToday = true } else { isToday = false }
        return (
            <ExerciseCard day={4} name={item.name} isSelected={isToday} onPress={() => goToWorkout(item)} key={item.key} />
        );
    };

    const goToWorkout = (exerciseData: any) => {
        navigation.navigate("Workout", { name: exerciseData.name });
    }


    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>
            <StatusBar barStyle='light-content' />
            <TodaysWorkout name="Hypertrophy Push Day" />
            {/* props should later be the whole exercise */}

            <Text style={[styles.h1, { color: 'white', fontSize: 24, marginHorizontal: 16, marginBottom: 8 }]}>
                Full workout:
            </Text>

            <ScrollView>
                {
                    exerciseList.map((item) => renderItem({ item }))
                }
            </ScrollView>

            {/* <HomeScreen nav={navigation} /> */}
        </ScrollView>
    )
};

export default Home;

// ================================= To-Do =================================
// Dynamic dark/light mode. Idk how to use hooks.
// Maybe sort the day so today's workout be on the top?
// Go to workout based on the workout selected. Right now, the place holder is a "New Workout" 
// 
//
//
// ================================= Styling To-Do =================================
// Redesign home screen into a style similar to iOS Spotify app; translucent header/status bar without a stack header.
// Structure -> Scrollable logo directly into Today's Workout card at the top. Scroll down to see the remaining workout for the week.
// Fade out the top and bottom of the ScrollView.
//
