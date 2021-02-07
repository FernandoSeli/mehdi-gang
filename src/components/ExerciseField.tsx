import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import styles from '../styles/Styles';

interface ExerciseFieldProps { }

const ExerciseField = (props: ExerciseFieldProps) => {

  const title = "Bench Press";

  const set = [
    { order: 0, reps: 5, rest: 90 }, { order: 1, reps: 6, rest: 90 }, { order: 2, reps: 8, rest: 0 },
  ]

  const arr = [1, 2, 3]

  const render = ({ item }) => {

    return (
      <View style={[styles.row, { justifyContent: 'flex-start', paddingHorizontal: 24 }]}>
        <Text style={[styles.text, { flex: 2, marginBottom: 3 }]}>Set #{item.order + 1}</Text>
        <Text style={[styles.text, { flex: 4, textAlign: 'center', marginBottom: 3 }]}>for {item.reps} reps</Text>
        <Text style={[styles.text, { flex: 2, textAlign: 'right' }]}>{item.rest}s rest</Text>
      </View>
    );
  }

  return (
    <View style={localStyles.container}>
      <Text style={styles.h2}>{title}</Text>
      <FlatList
        data={set}
        renderItem={render}
        keyExtractor={item => { return item.order.toString() }}
        extraData={set}
        style={{ paddingTop: 12, }}
      />
    </View>
  );
};

export default ExerciseField;

const localStyles = StyleSheet.create({
  container: {
    paddingTop: 12,
  }
});
