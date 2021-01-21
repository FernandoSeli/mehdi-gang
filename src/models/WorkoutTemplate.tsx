import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { OneToMany } from "typeorm/browser";
import { Routine } from "./Routine";
import { WorkoutLog } from "./WorkoutLog";
import { WorkoutTemplateExercise } from "./WorkoutTemplateExercise";
import { WorkoutTemplateMultiExercise } from "./WorkoutTemplateMultiExercise";
 
@Entity()
export class WorkoutTemplate {
 
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @Column()
    order: number;

    @OneToMany(() => WorkoutTemplateExercise, workoutTemplateExercise => workoutTemplateExercise.workoutTemplate)
    workoutTemplateExercises: WorkoutTemplateExercise[];

    @OneToMany(() => WorkoutTemplateMultiExercise, workoutTemplateMultiExercise => workoutTemplateMultiExercise.workoutTemplate)
    workoutTemplateMultiExercises: WorkoutTemplateMultiExercise[];

    @OneToMany(() => WorkoutLog, workoutLog => workoutLog.workoutTemplate)
    workoutLogs: WorkoutLog[];

    @ManyToOne(() => Routine, routine => routine.workoutTemplates)
    routine: Routine;

}