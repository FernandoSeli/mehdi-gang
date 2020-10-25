import { TouchableOpacity, View, Text } from 'react-native';
import React, { Component } from 'react';
import styles from '../styles/Styles';
import TestFirebase from '../components/test/TestFirebase';

class HomeScreen extends Component {
    state = {}

    render() {
        return (
            <View style={styles.container}>
              <TestFirebase/>  
            </View>
        );
    }
}

export default HomeScreen;