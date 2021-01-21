import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { OneToMany } from "typeorm/browser";
import { WorkoutLog } from "./WorkoutLog";
import { WorkoutLogExercise } from "./WorkoutLogExercise";
 
@Entity()
export class WorkoutLogMultiExercise {
 
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    order: number;

    @ManyToOne(() => WorkoutLog, workoutLog => workoutLog.workoutLogMultiExercises)
    workoutLog: WorkoutLog;
    
    @OneToMany(() => WorkoutLogExercise, workoutLogExercise => workoutLogExercise.workoutLogMultiExercise)
    workoutLogExercises: WorkoutLogExercise[];

}