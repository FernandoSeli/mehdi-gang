import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm/browser";
import { Workout } from "./Workout";

import "reflect-metadata";

@Entity("template")
export class Template {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  name: string;

  @OneToMany((_type) => Workout, (workout) => workout.template)
  workouts: Workout[];
}
