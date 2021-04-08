import * as React from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, FlatList, Modal } from 'react-native';
import styles, { lightBackground, light } from '../styles/Styles';
import ExerciseDataModal from './modals/ExerciseDataModal';

interface ExerciseFieldProps { }

const ExerciseField = (props: ExerciseFieldProps) => {

  const [visible, toggle] = React.useState(false)
  const title = "Bench Press";

  const set = [
    { order: 0, reps: 5, rest: 90 }, { order: 1, reps: 6, rest: 90 }, { order: 2, reps: 8, rest: 0 },
  ]

  const arr = [1, 2, 3]

  const onPress = () => {
    toggle(true)
  }

  const render = ({ item }) => {
    return (
      <View style={[styles.row, { justifyContent: 'flex-start', paddingHorizontal: 24 }]} key={item.order}>
        <Text style={[styles.text, { flex: 3, marginBottom: 2 }]}>{item.order + 1}</Text>
        <Text style={[styles.text, { flex: 3, textAlign: 'center', marginBottom: 2 }]}>{item.reps}</Text>
        <Text style={[styles.text, { flex: 3, textAlign: 'right', marginBottom: 2, }]}>{item.rest}s</Text>
      </View>
    );
  }

  return (
    <View>
      <ExerciseDataModal visible={visible} toggle={toggle} />
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={localStyles.container}>
          <Text style={[styles.h2, localStyles.title]}>{title}</Text>
          <View style={[styles.row, { justifyContent: 'flex-start', paddingHorizontal: 24 }]}>
            <Text style={[styles.lightRegular, localStyles.label, { textAlign: 'left' }]}>Set</Text>
            <Text style={[styles.lightRegular, localStyles.label]}>Reps</Text>
            <Text style={[styles.lightRegular, localStyles.label, { textAlign: 'right' }]}>Rest</Text>
          </View>
          {set.map((item) => render({ item }))}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ExerciseField;

const localStyles = StyleSheet.create({
  container: {
    marginBottom: 24,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: lightBackground,
    borderRadius: 4,

    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  title: {
    marginBottom: 4,
  },
  column: {
    flexDirection: 'column',
  },
  label: {
    flex: 1,
    marginBottom: 2,
    textAlign: 'center'
  }

});


{/* <FlatList
        data={set}
        renderItem={render}
        keyExtractor={item => { return item.order.toString() }}
        extraData={set}
        style={{ paddingTop: 12, }}
/> */}