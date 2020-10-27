import { TouchableOpacity, View, Text } from 'react-native';
import React, { Component } from 'react';
import styles from '../styles/Styles';
import TestFirebase from '../components/test/TestFirebase';
import ToWorkout from '../components/test/ToWorkout';

type Props = {
    nav: any,
}

class HomeScreen extends Component<Props> {
    state = {}

    render() {
        return (
            <View style={styles.container}>
              <TestFirebase/>  
              <ToWorkout title="To your workout!" nav={this.props.nav}/>
            </View>
        );
    }
}

export default HomeScreen;