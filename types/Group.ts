import { Task } from "./Task";

export interface Group {
  name: string;
  tasks: Task[];
  isCompleted: boolean;
}
