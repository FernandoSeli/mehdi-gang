import { OneToMany } from "typeorm";
import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm/browser";
import { ExerciseCategory } from "./ExerciseCategory";
import { WorkoutLogExercise } from "./WorkoutLogExercise";
import { WorkoutTemplateExercise } from "./WorkoutTemplateExercise";

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
    
    @OneToMany(() => WorkoutTemplateExercise, workoutTemplateExercise => workoutTemplateExercise.exercise)
    workoutTemplateExercises: WorkoutTemplateExercise[];

    @OneToMany(() => WorkoutLogExercise, workoutLogExercise => workoutLogExercise.exercise)
    workoutLogExercises: WorkoutLogExercise[];

    @ManyToOne(() => ExerciseCategory, exerciseCategory => exerciseCategory.exercises)
    exerciseCategory: ExerciseCategory;
}