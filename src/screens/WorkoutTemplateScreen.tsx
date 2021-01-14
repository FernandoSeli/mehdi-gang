import * as React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import styles, { borderColor, buttonColor, lightBackground } from '../styles/Styles';

export interface WorkoutTemplateProps {
}

export default function WorkoutTemplateEditor(props: WorkoutTemplateProps) {

  const [value, onChangeValue] = React.useState('')
  const [exerciseList, updateList] = React.useState([])

  return (
    <View style={[styles.whiteContainer, {paddingTop: 12,}]}>
      <Text style={[styles.light, localStyles.subContainer, {marginBottom: 14}]}>
        Create your own workout template. Use templates to easily autofill your workout exercises, including number of sets, reps, rest time and unique sets (supersets, etc.) when starting a new workout session.
      </Text>
      <TextInput
        style={localStyles.textInput}
        onChangeText={text => onChangeValue(text)}
        value={value}
        placeholder="Template name"
        placeholderTextColor="gray"
      />
      <View style={localStyles.subContainer}>
        <TouchableOpacity style={localStyles.textButtonContainer}>
          <Text style={styles.textButton}>
            + Add new exericse
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
  label: {
    fontWeight: 'bold',
    marginLeft: 24,
    marginBottom: 8,
  },
  subContainer: {
    marginHorizontal: 16
  },
  textButtonContainer:{
    margin: 0,
    marginTop: 14,
  },

})