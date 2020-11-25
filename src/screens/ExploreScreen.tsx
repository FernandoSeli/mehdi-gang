import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import styles from '../styles/Styles';

export interface Props {
    nav: any;
}

export interface State {
}

export default class ExploreScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <View style={styles.container}>
         <Text>Explore Page</Text>
      </View>
    );
  }
}
