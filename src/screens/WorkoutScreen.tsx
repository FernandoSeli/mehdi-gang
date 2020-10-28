import { useLinkProps } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/Styles';
//Component Imports
// import WorkoutForm from '../components/WorkoutForm';

type Props = {
    nav: any,
}

class WorkoutScreen extends Component<Props> {
    state = { 
        name: 'Your Workout'
     }

    constructor(props: Props){
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Workout form should be here.</Text>
                {/* <WorkoutForm type={1}/> */}
            </View>
        );
    }
}

export default WorkoutScreen;