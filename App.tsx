//Library Imports
import 'reflect-metadata';
import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font'
import { AppLoading } from 'expo'
import { setCustomText } from 'react-native-global-props';
//Screen Imports
import HomeScreen from './src/screens/HomeScreen';
import WorkoutScreen from './src/screens/WorkoutScreen';
//Component Imports
import Navigation from './src/navigation/Navigation';
//Import Firebase
import * as firebase from 'firebase';
import FirebaseInitialize from './src/database/FirebaseInitialize';
import { render } from 'react-dom';
//Database Initialization
if (!firebase.apps.length) {
  firebase.initializeApp(FirebaseInitialize);
}

export default function App() {

  let [fontsLoaded] = useFonts({
    'New-York-r': require('./assets/fonts/NewYorkRegular.ttf'),
    'OpenSans': require('./assets/fonts/OpenSans.ttf'),
    'OpenSans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  setCustomText({
    style: {
      fontFamily: 'OpenSans'
    }
  })

  if (!fontsLoaded) {
    return (
      <View style={{ backgroundColor: 'black', flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <AppLoading/>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    )
  }
  else {
    return (
      <Navigation />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
