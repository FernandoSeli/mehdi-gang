import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { borderColor, buttonColor, gray } from '../../styles/Styles';

interface ButtonProps {
    title: string;
    onPress: any;
}

const Button = (props: ButtonProps) => {
    return (
        <TouchableOpacity style={localStyles.button} onPress={props.onPress}>
            <Text style={localStyles.text}>{props.title}</Text>
        </TouchableOpacity>
    );
};

export default Button;

const localStyles = StyleSheet.create({
    container: {},
    button: {
        // marginHorizontal: 12,
        borderColor: borderColor,
        borderWidth: 1,
        borderRightWidth: 0.5,
        borderLeftWidth: 0.5,
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center',
        color: buttonColor
    }
});
