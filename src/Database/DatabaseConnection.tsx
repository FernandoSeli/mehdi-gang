import { createConnection } from "typeorm/browser";
import { Workout } from "../Models/Workout";
import { Template } from "../Models/Template";

import "reflect-metadata";

export class DatabaseConnection {
  static Connect() {
    return createConnection({
      database: "test",
      driver: require("expo-sqlite"),
      entities: [Template, Workout],
      synchronize: true,
      type: "expo",
    });
  }
}
