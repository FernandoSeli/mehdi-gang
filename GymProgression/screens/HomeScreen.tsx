import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import styles from '../styles/Styles';
import { Text, View } from 'react-native';

class HomeScreen extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <Text>Open up App.tsx to start working on your app!</Text>
                <StatusBar style="auto" />
            </View>
        );
    }
}

export default HomeScreen;