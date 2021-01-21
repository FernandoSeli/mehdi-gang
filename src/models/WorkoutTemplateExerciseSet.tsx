import { OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm/browser";
import { BaseSet } from "./BaseSet";
import { WorkoutTemplateExercise } from "./WorkoutTemplateExercise";
import { WorkoutTemplateExerciseDropSet } from "./WorkoutTemplateExerciseDropSet";

@Entity('workoutTemplateExerciseSets')
export class WorkoutTemplateExerciseSet extends BaseSet {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    rest: number;

    @ManyToOne(() => WorkoutTemplateExercise, workoutTemplateExercise => workoutTemplateExercise.workoutTemplateExerciseSets)
    workoutTemplateExercise: WorkoutTemplateExercise;

    @OneToMany(() => WorkoutTemplateExerciseDropSet, workoutTemplateExerciseDropSet => workoutTemplateExerciseDropSet.workoutTemplateExerciseSet)
    workoutTemplateExerciseDropSets: WorkoutTemplateExerciseDropSet[];
}