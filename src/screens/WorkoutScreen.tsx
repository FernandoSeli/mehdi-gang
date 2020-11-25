import { useLinkProps } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import styles from '../styles/Styles';
//Component Imports
import WorkoutForm from '../components/WorkoutForm';
import { clockRunning } from 'react-native-reanimated';

type Props = {
    nav: any,
}

interface formObject {
    key: number,
    name: string,
    reps: string,
    sets: string,
}

class WorkoutScreen extends Component<Props> {

    constructor(props: Props) {
        super(props);
        this.state = {
            name: 'Your Workout',
            exerciseArray: [],
        }
        for (var i = 0; i < 1; i++) {
            this.state.exerciseArray.push(
                {
                    key: i,
                    name: "Bench Press",
                    reps: '8',
                    sets: '3',
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
        console.log("Current data list:");
        console.log(this.state.exerciseArray)
    }

    renderItem = ({ item }) => (
        <WorkoutForm itemData={item} onChange={this.onChangeItemData} />
    );

    onChangeItemData = (newData: any) => {
        this.setState(
            state => this.state.exerciseArray[newData.key] = newData
        )
    }

    //Developer/Test Functions
    onPlusButton = () => {
        this.setState(
            state => {
                const list = this.state.exerciseArray.push({
                    key: this.state.exerciseArray.length,
                    name: '',
                    reps: '',
                    sets: '',
                })
                return list
            }
        )
        console.log("Added object.")
    }

    render() {

        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={[styles.formContainer, { paddingTop: 0 }]}>
                    {/* <Text style={[styles.h1, { padding: 14 }]}>Enter your workout details.</Text> */}

                    {/* <WorkoutForm /> */}

                    <FlatList
                        data={this.state.exerciseArray}
                        renderItem={this.renderItem}
                        keyExtractor={item => { return item.key.toString() }}
                        extraData={this.state.exerciseArray}
                    />

                    <TouchableOpacity style={[styles.buttonSolid, { marginTop: 12 }]} onPress={this.onPressSubmit}>
                        <Text style={[styles.buttonText, styles.white]}>Submit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buttonSolid]} onPress={this.onPlusButton}>
                        <Text style={[styles.buttonText, styles.white]}>Add a new exercise</Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default WorkoutScreen;

// ------------------ To-Do ------------------
// Yellow warning: keys and shit
// Re-order list by drag-and-dropping. Use npm i react-native-sortable-list --save (available on GitHub)
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

