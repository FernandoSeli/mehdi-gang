import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:mehdigang/src/constants/Route.dart';
import 'package:mehdigang/src/screens/testScreen.dart';

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
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
              icon: Icon(Icons.person_outline),
              iconSize: 30,
              color: Colors.white,
              onPressed: () {
                showDialog(
                    context: context,
                    child: AlertDialog(
                      title: Text('Oof!'),
                      content: Text('You pressed a button!'),
                      actions: <Widget>[
                        FlatButton(
                          child: Text('Ok sorry.'),
                          onPressed: () {
                            Navigator.of(context).pop();
                          },
                        )
                      ],
                    ));
              }),
          IconButton(
            icon: Icon(Icons.ac_unit),
            iconSize: 30,
            color: Colors.white,
            onPressed: () {
              Navigator.pushNamed(context, templateManagerRoute);
            },
          )
        ],
      ),
      // body: Column,
    );
  }
}
