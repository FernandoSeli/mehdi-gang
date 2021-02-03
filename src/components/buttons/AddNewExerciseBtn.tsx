import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import styles, { borderColor, lightBackground } from '../../styles/Styles';

interface AddNewExerciseBtnProps {
    onPress: any;
}

const AddNewExerciseBtn = (props: AddNewExerciseBtnProps) => {
    return (
        <TouchableOpacity style={localStyles.textButtonContainer} onPress={props.onPress}>
            <Text style={styles.textButton}>
                + Add new exericse
          </Text>
        </TouchableOpacity>
    );
};

export default AddNewExerciseBtn;

const localStyles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        height: 42,
        borderColor: borderColor,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        paddingLeft: 18,
        backgroundColor: lightBackground
    },
    textButtonContainer: {
        margin: 0,
        marginTop: 14,
    },
})