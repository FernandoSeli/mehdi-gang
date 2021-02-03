import * as React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import AddNewExerciseBtn from '../components/buttons/AddNewExerciseBtn';
import ExerciseSelectModal from '../components/modals/ExerciseSelectMd';
import { WorkoutTemplate } from '../models/WorkoutTemplate';
import { WorkoutTemplateExercise } from '../models/WorkoutTemplateExercise';
import styles, { borderColor, buttonColor, lightBackground } from '../styles/Styles';

export interface WorkoutTemplateProps {
}

export default function WorkoutTemplateEditor(props: WorkoutTemplateProps) {

  const [value, onChangeValue] = React.useState('')
  const [exerciseList, updateList] = React.useState([])
  const [modalVisible, toggleModal] = React.useState(false)

  const infoText = "Create your own workout template. Use templates to easily autofill your workout exercises, including number of sets, reps, rest time and unique sets (supersets, etc.) when starting a new workout session."

  const onPress = () => { //On Press AddNewExerciseBtn into a pop-up window.
    toggleModal(true)
  }


  const closeModal = () => {
    toggleModal(false)
  }

  return (
    <View style={[styles.whiteContainer, { paddingTop: 12, }]}>
      <ExerciseSelectModal visible={modalVisible} closeModal={closeModal} />

      <Text style={[styles.light, localStyles.subContainer, { marginBottom: 14 }]}>
        {infoText}
      </Text>
      <TextInput
        style={localStyles.textInput}
        onChangeText={text => onChangeValue(text)}
        value={value}
        placeholder="Template name"
        placeholderTextColor="gray"
      />
      <View style={localStyles.subContainer}>
        <AddNewExerciseBtn onPress={onPress} />
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
  textButtonContainer: {
    margin: 0,
    marginTop: 14,
  },

})

//Object stuff

  // const newWorkoutTmp = new WorkoutTemplate();

  // const newExerciseTmp = new WorkoutTemplateExercise;
  // newExerciseTmp.id = exerciseList.length; //Random or what?
  // newExerciseTmp.order = exerciseList.length;
  // newExerciseTmp.exercise = null;
  // newExerciseTmp.workoutTemplate = newWorkoutTmp; //?
  // newExerciseTmp.workoutTemplateExerciseSets = [];
  // // newExerciseTmp.workoutTemplateMultiExercise = []
  // updateList(exerciseList.concat(newExerciseTmp));
  // setTimeout(() => console.log(exerciseList), 2000); //Why does the output show late?