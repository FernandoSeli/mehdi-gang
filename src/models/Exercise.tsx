import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm/browser";
import { WorkoutExercise } from "./WorkoutExercise";

@Entity('exercise')
export class Exercise {
    
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    link: string;

    @Column()
    oneRepMax: number;
    
    @ManyToOne(type => WorkoutExercise, WorkoutExercise => WorkoutExercise.exercise)
    workoutExercises: WorkoutExercise[];
}