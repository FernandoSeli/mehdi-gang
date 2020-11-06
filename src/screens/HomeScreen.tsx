import { TouchableOpacity, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import styles from '../styles/Styles';
import TestFirebase from '../components/test/TestFirebase';
import NewWorkoutBtn from '../components/buttons/NewWorkoutBtn';

type Props = {
    nav: any,
}

class HomeScreen extends Component<Props> {
    state = {}

    render() {
        return (
            <View style={styles.container}>
                {/* <TestFirebase/> */}
                <NewWorkoutBtn title="Create a new workout day" nav={this.props.nav} />
            {/* for(let i = 0; i < 3; i++ ){
                console.log("Fucking typescript.")
            } */}
            <StatusBar style="dark"/>
            </View>
        );
    }
}

export default HomeScreen;