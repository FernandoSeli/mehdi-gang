import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import style from '../styles/Styles';
import NewWorkoutButton from '../components/buttons/NewWorkoutBtn'

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
        <Text>This is TestPage.tsx. Placeholder for Profile Page.</Text>
        <Text style={{ textAlign: 'center' }}>The Profile page is where user can change their current workout routine and look for the saved ones.</Text>
        <NewWorkoutButton title="Create a new workout day" nav={this.props.nav}/>
        <Text style={{textAlign: 'center'}}>Note that the route for the above button is not yet set and you are expected to be redirected to the Dashboard tab.</Text>
      </View>
    );
  }
}
