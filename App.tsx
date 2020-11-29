//Library Imports
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
  return (
      <Navigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
