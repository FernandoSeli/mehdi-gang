import { WorkoutTemplate } from "../models/WorkoutTemplate";
import { IWorkoutTemplateRepository } from "./IWorkoutTemplateRepository";

class WorkoutTemplateRepository implements IWorkoutTemplateRepository{
    GetWorkoutTemplates(): WorkoutTemplate[] {
        throw new Error("Method not implemented.");
    }
}

