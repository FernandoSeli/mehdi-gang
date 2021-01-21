import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { OneToMany } from "typeorm/browser";
import { Exercise } from "./Exercise";
import { WorkoutTemplate } from "./WorkoutTemplate";
import { WorkoutTemplateExerciseSet } from "./WorkoutTemplateExerciseSet";
import { WorkoutTemplateMultiExercise } from "./WorkoutTemplateMultiExercise";
 
@Entity()
export class WorkoutTemplateExercise {
 
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    order: number;

    
    @ManyToOne(() => Exercise, exercise => exercise.workoutTemplateExercises)
    exercise: Exercise;

    @ManyToOne(() => WorkoutTemplate, workoutTemplate => workoutTemplate.workoutTemplateExercises)
    workoutTemplate?: WorkoutTemplate;
    
    @OneToMany(() => WorkoutTemplateExerciseSet, workoutTemplateExerciseSet => workoutTemplateExerciseSet.workoutTemplateExercise)
    workoutTemplateExerciseSets: WorkoutTemplateExerciseSet[];


    @ManyToOne(() => WorkoutTemplateMultiExercise, workoutTemplateMultiExercise => workoutTemplateMultiExercise.workoutTemplateExercises)
    workoutTemplateMultiExercise?: WorkoutTemplateMultiExercise;

}