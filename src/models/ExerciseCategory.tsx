import { OneToMany } from "typeorm";
import { Column, Entity, PrimaryColumn } from "typeorm/browser";
import { Exercise } from "./Exercise";

@Entity('exerciseCategory')
export class ExerciseCategory {
    
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    imageLocation: string;
    
    @OneToMany(() => Exercise, exercise => exercise.exerciseCategory)
    exercises: Exercise[];
}