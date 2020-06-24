import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:mehdigang/src/constants/Route.dart';
import 'package:mehdigang/src/screens/home.dart';
import 'package:mehdigang/src/screens/testScreen.dart';

class Router {
  static Route<dynamic> generateRoute(RouteSettings settings) {
    switch (settings.name) {
      case homeRoute:
        return MaterialPageRoute(builder: (_) => HomeScreen());
      case templateManagerRoute:
        return MaterialPageRoute(builder: (_) => TestScreen());
      default:
        return MaterialPageRoute(
            builder: (_) => Scaffold(
                  body: Center(
                      child: Text('No route defined for ${settings.name}')),
                ));
    }
  }
}
