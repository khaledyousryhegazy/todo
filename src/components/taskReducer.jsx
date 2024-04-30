// TaskContext.js
import { createContext, useContext, useReducer } from "react";

const TaskContext = createContext();

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const updatedTasks = [
        { text: action.payload, completed: false },
        ...state.tasks,
      ];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return { ...state, tasks: updatedTasks };
    case "DELETE_TASK":
      const filteredTasks = state.tasks.filter(
        (task) => task.text !== action.payload
      );
      localStorage.setItem("tasks", JSON.stringify(filteredTasks));
      return { ...state, tasks: filteredTasks };
    case "TOGGLE_COMPLETE":
      const updatedTasksWithCompletion = state.tasks.map((task) =>
        task.text === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasksWithCompletion));
      return { ...state, tasks: updatedTasksWithCompletion };
    case "CLEAR_COMPLETED":
      const incompleteTasks = state.tasks.filter((task) => !task.completed);
      localStorage.setItem("tasks", JSON.stringify(incompleteTasks));
      return { ...state, tasks: incompleteTasks };
    default:
      return state;
  }
};
export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);
