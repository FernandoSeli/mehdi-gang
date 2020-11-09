import { useLinkProps } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import styles from '../styles/Styles';
//Component Imports
import WorkoutForm from '../components/WorkoutForm';

type Props = {
    nav: any,
}

interface formObject {
    name: string,
    reps: string,
    sets: string,
}

class WorkoutScreen extends Component<Props> {

    constructor(props: Props) {
        super(props);
        this.state = {
            name: 'Your Workout',
            exerciseArray: []
        }
        for (var i = 0; i < 2; i++) {
            this.state.exerciseArray.push(
                {
                    name: "Pendlay Rows",
                    reps: '4',
                    sets: '5',
                }
            )
        }
    }

    state = {
        exerciseArray: [],
        name: '',
    }

    onEditForm = () => {
        
    }

    onPressSubmit = () => {
        console.log(this.state.exerciseArray)
    }

    render() {

        const renderItem = () => (
            <WorkoutForm />
        );

        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={[styles.formContainer, { paddingTop: 14 }]}>
                    <Text style={[styles.h1, { padding: 14 }]}>Enter your workout details.</Text>

                    {/* <WorkoutForm /> */}

                    <FlatList
                        data={this.state.exerciseArray}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />

                    <TouchableOpacity style={[styles.buttonSolid, { marginTop: 12 }]} onPress={this.onPressSubmit}>
                        <Text style={[styles.buttonText, styles.white]}>Submit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buttonSolid]} onPress={this.onPressSubmit}>
                        <Text style={[styles.buttonText, styles.white]}>+</Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default WorkoutScreen;

// ------------------ To-Do ------------------
// Component/screen communication on each exercise's form/
// Dynamic [+] button to add new exercises.
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 

