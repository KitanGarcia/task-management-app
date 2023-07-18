import React, { useState } from "react";
import { Group } from "../types/Group";
import GroupList from "./components/GroupList";
import "./App.css";

function App() {
  const task1 = {
    name: "tasks1",
    isCompleted: false,
  };

  const task2 = {
    name: "tasks2",
    isCompleted: false,
  };

  const exampleGroup = {
    name: "test",
    tasks: [task1, task2],
    isCompleted: false,
  };

  const [groups, setGroups] = useState([exampleGroup]);
  // const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      {groups && groups.map((group) => <GroupList group={group} />)}
    </div>
  );
}

export default App;
