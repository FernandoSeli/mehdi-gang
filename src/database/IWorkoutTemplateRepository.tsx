import { WorkoutTemplate } from "../models/WorkoutTemplate";

export interface IWorkoutTemplateRepository {
    GetWorkoutTemplates(): WorkoutTemplate[];
}

