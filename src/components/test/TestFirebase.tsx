import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from '../../styles/Styles';
import * as firebase from 'firebase';

class TestFirebase extends Component {
    state = {}

    onPress = () => {
        const ref = firebase.database().ref('test')
        firebase.database().ref('test').push("Pizza baby!", function(error){if(error){console.log(error)} else {ref.child('pizzas').set(firebase.database.ServerValue.increment(1)); console.log("Success push!")} })
        alert("Successful!")
    }

    render() {
        return (
            <TouchableOpacity
                style={styles.button}
                onPress={this.onPress}
                accessibilityLabel="Who doesn't like pizzas?"
            >
                <Text style={styles.buttonText}>Push pizzas to firebase!</Text>
            </TouchableOpacity>
        );
    }
}

export default TestFirebase;