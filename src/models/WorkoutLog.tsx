import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { OneToMany } from "typeorm/browser";
import { Routine } from "./Routine";
import { WorkoutLogExercise } from "./WorkoutLogExercise";
import { WorkoutLogMultiExercise } from "./WorkoutLogMultiExercise";
import { WorkoutTemplate } from "./WorkoutTemplate";
import { WorkoutTemplateExercise } from "./WorkoutTemplateExercise";
 
@Entity()
export class WorkoutLog {
 
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    date:Date;

    @OneToMany(() => WorkoutLogExercise, workoutLogExercise => workoutLogExercise.workoutLog)
    workoutLogExercises: WorkoutLogExercise[];

    @OneToMany(() => WorkoutLogMultiExercise, workoutLogMultiExercise => workoutLogMultiExercise.workoutLog)
    workoutLogMultiExercises: WorkoutLogMultiExercise[];

    @ManyToOne(() => WorkoutTemplate, workoutTemplate=> workoutTemplate.workoutLogs)
    workoutTemplate: WorkoutTemplate;

}