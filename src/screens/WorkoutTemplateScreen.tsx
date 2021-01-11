import * as React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/Styles';

export interface WorkoutTemplateProps {
}

export default function WorkoutTemplateEditor (props: WorkoutTemplateProps) {
    return (
      <View style={styles.darkContainer}>
         <Text style={{textAlign:"center"}}>Work in Progress</Text>
      </View>
    );
}
