import { OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm/browser";
import { BaseSet } from "./BaseSet";
import { WorkoutLogExercise } from "./WorkoutLogExercise";
import { WorkoutLogExerciseDropSet } from "./WorkoutLogExerciseDropSet";

@Entity('workoutLogExerciseSets')
export class WorkoutLogExerciseSet extends BaseSet {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    rest: number;

    @Column()
    weightAchieved: number;
    
    @Column()
    repsAchieved: number;
    

    @ManyToOne(() => WorkoutLogExercise, workoutLogExercise => workoutLogExercise.workoutLogExerciseSets)
    workoutLogExercise: WorkoutLogExercise;

    @OneToMany(() => WorkoutLogExerciseDropSet, workoutLogExerciseDropSet => workoutLogExerciseDropSet.workoutLogExerciseSet)
    workoutLogExerciseDropSets: WorkoutLogExerciseDropSet[];
}