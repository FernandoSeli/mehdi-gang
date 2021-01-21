import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
import { OneToMany } from "typeorm/browser";
import { WorkoutTemplate } from "./WorkoutTemplate";
 
@Entity('routine')
export class Routine {
 
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @OneToMany(() => WorkoutTemplate, workoutTemplate => workoutTemplate.routine)
    workoutTemplates?: WorkoutTemplate[];
}