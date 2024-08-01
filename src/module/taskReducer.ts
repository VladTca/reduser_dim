import { TaskType } from "../App";
import { v1 } from "uuid";

export const taskReducer = (
  state: TaskType[],
  action: TaskReducerType,
): TaskType[] => {
  switch (action.type) {
    case "REMOVE-TASK":
      return state.filter((task) => task.id !== action.payload.id);
    case "ADD-TASK":
      return [
        ...state,
        { id: v1(), title: action.payload.title, isDone: false },
      ];
    default:
      return state;
  }
};

type TaskReducerType = RemoveTaskActionType | AddTaskActionType;

type RemoveTaskActionType = {
  type: "REMOVE-TASK";
  payload: {
    id: string;
  };
};

type AddTaskActionType = {
  type: "ADD-TASK";
  payload: {
    title: string;
  };
};

export const removeTaskAC = (id: string): RemoveTaskActionType => {
  return { type: "REMOVE-TASK", payload: { id } } as const;
};

export const addTaskAC = (title: string): AddTaskActionType => {
  return { type: "ADD-TASK", payload: { title } } as const;
};
