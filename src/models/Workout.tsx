import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm/browser";
import { WorkoutExercise } from "./WorkoutExercise";
import { WorkoutTemplate } from "./WorkoutTemplate";

@Entity('workout')
export class Workout {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    date: Date;

    @ManyToOne(type => WorkoutTemplate, workoutTemplate => workoutTemplate.workouts)
    workoutTemplate: WorkoutTemplate;

    
    @OneToMany(type => WorkoutExercise, workoutExercise => workoutExercise.workout)
    workoutExercises: WorkoutExercise[];
}