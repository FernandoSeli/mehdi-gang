import { useLinkProps } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, Platform, TouchableOpacity, FlatList, KeyboardAvoidingView } from 'react-native';
import styles, { white, keyboardVerticalOffset } from '../styles/Styles';
//Component Imports
import WorkoutForm from '../components/WorkoutForm';
import { clockRunning } from 'react-native-reanimated';
import Navigation from '../navigation/Navigation';
import { ScrollView } from 'react-native-gesture-handler';

type Props = {
    nav: any,
    data: any,
}

class WorkoutScreen extends Component<Props> {

    constructor(props: Props) {
        super(props);
        this.state = {
            name: 'Your Workout',
            exerciseArray: [],
        }
        if (!props.data) {
            for (var i = 0; i < 1; i++) {
                this.state.exerciseArray.push(
                    {
                        key: i,
                        name: "",
                        reps: '',
                        sets: '',
                        weight: '',
                        rest: '',
                    }
                )
            }
        }
        else {
            const data = props.data
            for (var i = 0; i < data.length; i++) {
                const child = {
                    key: data[i].key,
                    name: data[i].name,
                    reps: data[i].reps,
                    sets: data[i].sets,
                    weight: '90',
                    rest: '60',
                }
                this.state.exerciseArray.push(child)
            }
        }
    }

    state = {
        exerciseArray: [],
        name: '',
    }

    onPressSubmit = () => {
        const list = this.state.exerciseArray
        console.log("Current data list:");
        console.log(list);
        alert("See console to view output.")
    }

    renderItem = ({ item }) => <WorkoutForm itemData={item} onChange={this.onChangeItemData} key={item.key} />


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
            <KeyboardAvoidingView style={{ flex: 1, backgroundColor: white }} behavior={Platform.OS == "ios" ? "padding" : "height"} keyboardVerticalOffset={110}>
                <View style={[styles.formContainer, { paddingTop: 0 }]}>
                    {/* <Text style={[styles.h1, { padding: 14 }]}>Enter your workout details.</Text> */}

                    {/* <WorkoutForm /> */}

                    {/* <FlatList
                        data={this.state.exerciseArray}
                        renderItem={this.renderItem}
                        keyExtractor={item => { return item.key.toString() }}
                        extraData={this.state.exerciseArray}
                        style={{width: '100%'}}
                    /> */}

                    <ScrollView style={{ width: '100%' }}>
                        {
                            this.state.exerciseArray.map((item) => this.renderItem({ item }))
                        }
                    </ScrollView>

                    <TouchableOpacity onPress={this.onPlusButton}>
                        <Text style={[styles.linkedText]}>Add a new exercise</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onPressSubmit}>
                        <Text style={[styles.linkedText]}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

function Workout({ route, navigation }) {
    // React.useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerRight: () => (
    //             <TouchableOpacity onPress={() => alert("Add new!")}>
    //                 <Text style={{ fontSize: 34, textAlign: 'center', marginRight: 16, color: 'white' }}>+</Text>
    //             </TouchableOpacity>
    //         ),

    //     });
    // }, [navigation])
    const data = route.params.item
    return (<WorkoutScreen nav={navigation} data={data}/>)
};

export default Workout;

// ------------------ To-Do ------------------
// Yellow warning: keys and shit
// Re-order list by drag-and-dropping. Use npm i react-native-sortable-list --save (available on GitHub)
// Plus button on the header.
// 
// URGENT!! Move everything out of the WorkoutScreen class and into the Workout() function.
// Remember: every data is held in the class and not the function/form. Be sure to properly import all data and methods properly.
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

