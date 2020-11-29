import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import style from '../styles/Styles';
import NewWorkoutButton from '../components/buttons/NewWorkoutBtn'
import { LinearGradient } from 'expo-linear-gradient'

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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 26, backgroundColor: 'black' }}>
        {/* <NewWorkoutButton title="Create a new workout day" nav={this.props.nav} /> */}
        <LinearGradient colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0)', 'rgba(0,0,0,1)']}>
          <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center', }}>
            <Text style={{textAlign: 'center', color: 'white'}}>Hello</Text>
          </View>
        </LinearGradient>
      </View>
    );
  }
}



function Blank({ navigation }) { return (<BlankPage nav={navigation} />) };
