import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm/browser";
import { Exercise } from "./Exercise";
import { Workout } from "./Workout";

@Entity('workoutExercise')
export class WorkoutExercise {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    reps: number;
    
    @Column()
    sets: number;
    
    @Column()
    rest: number;

    @Column()
    order: number;
    
    @ManyToOne(type => Workout, workout => workout.workoutExercises)
    workout: Workout;

    @ManyToOne(type => Exercise, exercise => exercise.workoutExercises)
    exercise: Exercise;
}