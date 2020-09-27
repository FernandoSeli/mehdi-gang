import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm/browser";
import { Template } from "./Template";

import "reflect-metadata";
@Entity("workout")
export class Workout {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  name: string;

  @Column("int")
  lowRepRange: number;

  @Column("int")
  highRepRange: number;

  @Column("int")
  sets: number;

  @Column("int")
  restInSeconds: number;

  @Column("int")
  weightIncrement: number = 1;

  @Column("int")
  currentLift: number;

  @Column("int")
  currentOneRepMax: number;

  @Column()
  linkToGoogle: string;

  @ManyToOne((_type) => Template, (template) => template.workouts, {
    cascade: ["insert"],
  })
  template: Template;
}
