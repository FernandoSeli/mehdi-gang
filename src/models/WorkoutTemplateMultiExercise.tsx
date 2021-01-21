import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { OneToMany } from "typeorm/browser";
import { WorkoutTemplate } from "./WorkoutTemplate";
import { WorkoutTemplateExercise } from "./WorkoutTemplateExercise";
 
@Entity()
export class WorkoutTemplateMultiExercise {
 
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    order: number;

    @ManyToOne(() => WorkoutTemplate, workoutTemplate => workoutTemplate.workoutTemplateMultiExercises)
    workoutTemplate: WorkoutTemplate;
    
    @OneToMany(() => WorkoutTemplateExercise, workoutTemplateExercise => workoutTemplateExercise.workoutTemplateMultiExercise)
    workoutTemplateExercises: WorkoutTemplateExercise[];

}