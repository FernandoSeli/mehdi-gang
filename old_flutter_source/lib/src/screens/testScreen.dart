import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:mehdigang/src/constants/Route.dart';

class TestScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<TestScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
            icon: Icon(Icons.menu),
            iconSize: 30,
            color: Colors.white,
            onPressed: () {}),
        title: Text('Routines',
            style: TextStyle(
              fontSize: 24,
              // fontWeight: FontWeight.bold,
            )),
        elevation: 0,
        actions: <Widget>[
          IconButton(
              icon: Icon(Icons.arrow_back),
              iconSize: 30,
              color: Colors.white,
              onPressed: () {
                Navigator.pushNamed(context, homeRoute);
              })
        ],
      ),
      // body: Column,
    );
  }
}
