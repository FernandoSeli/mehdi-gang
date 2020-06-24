import 'dart:async';

class WorkoutTemplate {
  final int id;
  final String name;
  final int sets;
  final int restTime;
  final int weightIncrement;

  WorkoutTemplate(
      this.id, this.name, this.sets, this.restTime, this.weightIncrement);
}
