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
import Database from './src/database/database';
//Database Initialization
if (!firebase.apps.length) {
  firebase.initializeApp(FirebaseInitialize);
}

export default function App() {

  let [fontsLoaded] = useFonts({
    'New-York-r': require('./assets/fonts/NewYorkRegular.ttf'),
    // 'OpenSans': require('./assets/fonts/OpenSans.ttf'),
    // 'bold': require('./assets/fonts/bold.ttf'),
    'SFP': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
    'bold': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
    'medium': require('./assets/fonts/SF-Pro-Text-Medium.otf'),
  });

  setCustomText({
    style: {
      // fontFamily: 'OpenSans'
      fontFamily: 'SFP',
    }
  })

  // Database.connect().then();

  if (!fontsLoaded) {
    return (
      <View style={{ backgroundColor: 'red', flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <AppLoading />
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
