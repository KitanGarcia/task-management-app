import React, { useState } from "react";
import { Group } from "../../types/Group";
import TaskList from "./TaskList";

interface GroupListProps {
  group: Group;
}

function GroupList({ group }: GroupListProps) {
  return (
    <div>
      <ul>{`${group.name} status: ${
        group.isCompleted ? "Completed" : "In Progress"
      }`}</ul>

      {group.tasks && group.tasks.map((task) => <TaskList task={task} />)}
    </div>
  );
}

export default GroupList;
