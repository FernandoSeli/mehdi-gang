import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm/browser";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import { BaseSet } from "./BaseSet";
import { WorkoutTemplateExercise } from "./WorkoutTemplateExercise";
import { WorkoutTemplateExerciseSet } from "./WorkoutTemplateExerciseSet";

@Entity('workoutTemplateExerciseSets')
export class WorkoutTemplateExerciseDropSet extends BaseSet {
    @PrimaryGeneratedColumn()
    id:number;
    
    @ManyToOne(() => WorkoutTemplateExerciseSet, workoutTemplateExerciseSet => workoutTemplateExerciseSet.workoutTemplateExerciseDropSets)
    workoutTemplateExerciseSet: WorkoutTemplateExerciseSet;

}