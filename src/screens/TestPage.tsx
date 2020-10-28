import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import style from '../styles/Styles';

export interface BlankProps {
  nav: any;
}

export interface BlankState {
}

export default class BlankPage extends React.Component<BlankProps, BlankState> {
  constructor(props: BlankProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <View style={style.container}>
         <Text>This place is for developers only. Shoo shoo</Text>
      </View>
    );
  }
}
