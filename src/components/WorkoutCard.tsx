import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import styles from '../styles/Styles';

// type Props = [
//   name: string,
//   day: number,
// ]

const WorkoutCard = (props: any) => {
  //Props
  let name = props.name
  let day = props.day
  let onPress = props.onPress
  let selected = props.isSelected

  let view: any
  if (selected) {
    // view = <Text style={styles.title}>{name}</Text>
    view =
      <View style={[styles.homeCard]}>
        <Text style={[styles.light]}>Today</Text>
        <Text style={styles.title}>{name}</Text>
      </View>
  }
  else {
    view =
      <View style={[styles.homeCard]}>
        <Text style={styles.light}>Day {day}</Text>
        <Text style={styles.title2}>{name}</Text>
      </View>
  }

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.84}>
      { view }
    </TouchableOpacity>
  );
};

export default WorkoutCard; //Rename this to SessionCard later.