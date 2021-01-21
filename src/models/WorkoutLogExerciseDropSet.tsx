import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm/browser";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import { BaseSet } from "./BaseSet";
import { WorkoutLogExercise } from "./WorkoutLogExercise";
import { WorkoutLogExerciseSet } from "./WorkoutLogExerciseSet";

@Entity('workoutLogExerciseSets')
export class WorkoutLogExerciseDropSet extends BaseSet {
    
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    weightAchieved: number;
    
    @Column()
    repsAchieved: number;

    @ManyToOne(() => WorkoutLogExerciseSet, workoutLogExerciseSet => workoutLogExerciseSet.workoutLogExerciseDropSets)
    workoutLogExerciseSet: WorkoutLogExerciseSet;

}