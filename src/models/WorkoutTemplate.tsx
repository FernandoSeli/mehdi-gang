import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
import { OneToMany } from "typeorm/browser";
import { Workout } from "./Workout";
 
@Entity()
export class WorkoutTemplate {
 
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @OneToMany(type => Workout, workout => workout.workoutTemplate)
    workouts: Workout[];
}