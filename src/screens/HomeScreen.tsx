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
//Temporary
import exerciseListJson from '../database/ExerciseList'

type Props = {
    nav: any,
}

function Home({ navigation }) {

    var date = new Date();
    const { width } = Dimensions.get('window');
    const { height } = Dimensions.get('screen')
    const [today, setDay] = useState(date.getDay());
    const [exerciseList, exerciseListEdit] = useState(exerciseListJson);
    const findWorkout = () => {
        return exerciseListJson.find((workout) => workout.day === today)
    }
    const todaysWorkout = findWorkout()

    const renderItem = ({ item }) => {
        let isToday: boolean
        if (item.day === today) { isToday = true } else { isToday = false }
        return (
            <ExerciseCard day={item.day} name={item.name} isSelected={isToday} onPress={() => goToWorkout(item)} key={item.key} />
        );
    };

    const goToWorkout = (item: any) => {
        let name:string, exercises:any;
        if(item){
            name = item.name
            exercises = item.exercises
        }
        else{
            name = '',
            exercises= null
        }
        navigation.navigate("Workout", { name: name, item: exercises }); //Ask Nando if you should prop the whole data.
    }


    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>

            <StatusBar barStyle='light-content' />

            <TodaysWorkout item={todaysWorkout} onPressLink={goToWorkout} />
            {/* props should later be the whole exercise */}

            <Text style={[styles.h1, { color: 'white', fontSize: 20, marginHorizontal: 16, marginBottom: 8 }]}>
                Choose from <Text style={{ color: themeColor }}>PPL</Text>:
            </Text>

            <View>
                {
                    exerciseList.map((item) => renderItem({ item }))
                }
            </View>

            <TouchableOpacity onPress={() => goToWorkout(null)}>
                <Text style={[styles.linkedText, {
                    marginHorizontal: 16,
                    marginVertical: 8,
                    // textAlign: 'left'
                }]}>
                    New workout template
                </Text>
            </TouchableOpacity>
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