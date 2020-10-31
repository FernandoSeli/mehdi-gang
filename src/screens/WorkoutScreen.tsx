import { useLinkProps } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/Styles';
//Component Imports
import WorkoutForm from '../components/WorkoutForm';

type Props = {
    nav: any,
}

class WorkoutScreen extends Component<Props> {
    state = {
        name: 'Your Workout'
    }

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <View style={[styles.formContainer, {paddingTop: 82}]}>
                {/* <Text style={[styles.h1, { padding: 14 }]}>Enter your workout details.</Text> */}
                <WorkoutForm />
            </View>
        );
    }
}

export default WorkoutScreen;

