import React, { useState } from "react";
import { Task } from "../../types/Task";

interface TaskListProps {
  task: Task;
}

function TaskList({ task }: TaskListProps) {
  return (
    <ul>{`${task.name} status: ${
      task.isCompleted ? "Completed" : "In Progress"
    }`}</ul>
  );
}

export default TaskList;
