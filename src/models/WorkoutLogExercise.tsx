import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { OneToMany } from "typeorm/browser";
import { Exercise } from "./Exercise";
import { WorkoutLog } from "./WorkoutLog";
import { WorkoutLogExerciseSet } from "./WorkoutLogExerciseSet";
import { WorkoutLogMultiExercise } from "./WorkoutLogMultiExercise";
 
@Entity()
export class WorkoutLogExercise {
 
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    order: number;

    
    @ManyToOne(() => Exercise, exercise => exercise.workoutLogExercises)
    exercise: Exercise;

    @ManyToOne(() => WorkoutLog, workoutLog => workoutLog.workoutLogExercises)
    workoutLog?: WorkoutLog;

    @ManyToOne(() => WorkoutLogMultiExercise, workoutLogMultiExercise => workoutLogMultiExercise.workoutLogExercises)
    workoutLogMultiExercise?: WorkoutLogMultiExercise;
    
    @OneToMany(() => WorkoutLogExerciseSet, workoutLogExerciseSet => workoutLogExerciseSet.workoutLogExercise)
    workoutLogExerciseSets: WorkoutLogExerciseSet[];


}