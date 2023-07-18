import React, { useState } from "react";
import { Group } from "../../types/Group";

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

/*
 *  Group
 *    Task1
 *    Tasks2
 *  Row inputs - Add Task
 *
 *
 *  in groupList
 *  [newTaskName, setNEwTaskName) = useState("")
 *  [newtaksiscompltete, Setewtaksiscompltete) = useState("")
 *  on cahnge here in group
 *
 *
 *
 *  pass the pn change and state variable into new componetn
 *  The add task ocmponente
 *
 *  On Chagne (event)
 *  setNewTaskName(event.target.value);
 *
 *  Toggle
 *  On Chagne (event)
 *  setNewTaskIsComplete(event.target.value); true or false
 *
 *
 *  In App
 *  handleAddTask()
 *  copy the task array of this group
 *  Push a new task onto the array
 *
 *  Make copy of groups
 *  Find group at appropriate
 *
 *  replace tasks array with new copy
 *
 *  setGroups(groupsCopy)
 *
 *  name:
 *  group
 *  convert to an input to yue in new grroup
 *
 */
